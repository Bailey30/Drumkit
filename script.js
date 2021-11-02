//@ts-check
//Arrow functions do not have their own bindings for this, resulting in this retaining the value of the enclosing lexical context's this.
//We are using a regular function, so the this context inside the callback will be bound to the event target.

let drums = document.querySelectorAll(".drum")

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        // playsound(this.id)
        new Audio("sounds/" + this.id + ".wav").play();
        drums[i].style.background = "#5a189a"
        setTimeout(function () {
            drums[i].style.background = "#240046"
        }, 30);
    });


}

function playsound(input) {
    new Audio("sounds2/" + input + ".mp3").play();
}
document.addEventListener("keydown", function (event) {
    for (let i = 0; i < drums.length; i++) {
        if (drums[i].classList.contains(event.key)) {
            new Audio("sounds/" + drums[i].id + ".wav").play();
            let id = drums[i].id
            drums[id-1].style.background = "#5a189a"
            console.log(drums[i].id);
            setTimeout(function () {
                drums[id-1].style.background = "#240046"
            }, 30)
            drums[id-1].style.transform = "scale(0.98)"
            setTimeout(function () {
                drums[id-1].style.transform = "scale(1)"
            }, 50)
        }


        
    }
})


// var button = document.querySelectorAll(".drum");

// for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", function () {

//         // makesound(this.innerHTML)
//         playsound(this.id)
//     });

// }

// function playsound(input) {
//    new Audio("sounds2/" + input + ".mp3").play(); 
// }   
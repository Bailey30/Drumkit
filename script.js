//@ts-check
//Arrow functions do not have their own bindings for this, resulting in this retaining the value of the enclosing lexical context's this.
//We are using a regular function, so the this context inside the callback will be bound to the event target.
let btm = document.querySelectorAll(".btm")
let drums = document.querySelectorAll(".drum")

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        new Audio("sounds/" + this.id + ".wav").play();

        drums[i].style.transform = "translateY(10px)"
        setTimeout(function () {
            drums[i].style.transform = "translateY(0px)"
        }, 30);
        drums[i].style.height = 90 + "px"
        setTimeout(function () {
            drums[i].style.height = 100 + "px"
        }, 30);
        
        btm[i].style.display = "none"
        setTimeout(function () {
            btm[i].style.display = "block"
        }, 30);
    });
}

document.addEventListener("keydown", function (event) {
    for (let i = 0; i < drums.length; i++) {
        if (drums[i].classList.contains(event.key)) {
            new Audio("sounds/" + drums[i].id + ".wav").play();

            drums[i].style.transform = "translateY(10px)"
            console.log(drums[i].id);
            setTimeout(function () {

                drums[i].style.transform = "translateY(0px)"
            }, 30);
            drums[i].style.height = 90 + "px"
            setTimeout(function () {
                drums[i].style.height = 100 + "px"
            }, 30);
            
            btm[i].style.display = "none"
            setTimeout(function () {
                btm[i].style.display = "block"
            }, 30);
        }     
    }
})



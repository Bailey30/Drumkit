//@ts-check
//Arrow functions do not have their own bindings for this, resulting in this retaining the value of the enclosing lexical context's this.
//We are using a regular function, so the this context inside the callback will be bound to the event target.
let btm = document.querySelectorAll(".btm")
let drums = document.querySelectorAll(".drum")
let ani1 = document.querySelector(".ani1")
let ani2 = document.querySelector(".ani2")
let s4 = document.querySelector(".s4")
let s5 = document.querySelector(".s5")
let ani3 = document.querySelector(".ani3")
let all = document.querySelector(".all")

let rotate = 0
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

        //kick animation
        if (i === 0) {
            ani1.style.animation = "kick 0.1s linear"
            setTimeout(() => {
                ani1.style.removeProperty('animation')
            }, 100)
        }

        //hat1 animation
        if (i === 1 && rotate === 0) {

            ani2.style.animation = "rotateright 0.05s ease"
            rotate = 1
            setTimeout(() => {
                ani2.style.removeProperty('animation')
            }, 50)

        } else if (i === 1 && rotate === 1) {

            ani2.style.animation = "rotateleft 0.05s ease"
            rotate = 0
            setTimeout(() => {
                ani2.style.removeProperty('animation')
            }, 50)
        }
        //snare 1 animation
        if (i === 2) {

            ani3.style.animation = "snare .1s ease"
            setTimeout(() => {
                ani3.style.removeProperty('animation')
            }, 100)
        }
        //snare 2 animation
        if (i === 3) {

                all.style.animation = "rumble .1s ease"
                setTimeout(() => {
                    all.style.removeProperty('animation')
                }, 100)
            }




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

            //kick animation
            if (i === 0) {
                ani1.style.animation = "kick 0.1s linear"
                setTimeout(() => {
                    ani1.style.removeProperty('animation')
                }, 100)
            }
            //hat animation
            if (i === 1 && rotate === 0) {

                ani2.style.animation = "rotateright 0.05s ease"
                rotate = 1
                setTimeout(() => {
                    ani2.style.removeProperty('animation')
                }, 50)

            } else if (i === 1 && rotate === 1) {

                ani2.style.animation = "rotateleft 0.05s ease"
                rotate = 0
                setTimeout(() => {
                    ani2.style.removeProperty('animation')
                }, 50)
            }

            //snare animation
            if (i === 2) {

                ani3.style.animation = "snare .1s ease"
                setTimeout(() => {
                    ani3.style.removeProperty('animation')
                }, 100)
            }

            //snare 2 animation
        if (i === 3) {

            all.style.animation = "rumble .1s ease"
            setTimeout(() => {
                all.style.removeProperty('animation')
            }, 100)
        }
        }
    }
})
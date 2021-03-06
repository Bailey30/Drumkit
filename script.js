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
let hat1 = document.querySelector(".hat1")
let hat2 = document.querySelector(".hat2")
let tom = document.querySelector(".tomline")
let tomleft = document.querySelector(".tomleft")
let tomright = document.querySelector(".tomright")
let tomtop = document.querySelector(".tomtop")
let cowbell = document.querySelector(".cowbell")
let cowbell2 = document.querySelector(".cowbell2")
let light = document.querySelector(".light")

let rotate = 0
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        new Audio("sounds/" + this.id + ".wav").play();

        //button animations
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
            all.style.animation = "down 0.1s linear"
            setTimeout(() => {
                all.style.removeProperty('animation')
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
            ani3.style.animation = "snare 1s ease"
            setTimeout(() => {
                ani3.style.removeProperty('animation')
            }, 100)
            if (i === 3 && rotate === 0) {

                ani2.style.animation = "rotateright 0.05s ease"
                rotate = 1
                setTimeout(() => {
                    ani2.style.removeProperty('animation')
                }, 50)

            } else if (i === 3 && rotate === 1) {

                ani2.style.animation = "rotateleft 0.05s ease"
                rotate = 0
                setTimeout(() => {
                    ani2.style.removeProperty('animation')
                }, 50)
            }

            ani1.style.animation = "rotateright 0.05s ease"
            rotate = 1
            setTimeout(() => {
                ani1.style.removeProperty('animation')
            }, 50)

        }

        //hat 2 animation
        if (i === 4) {
            hat1.style.animation = "openhat1 .5s linear"
            setTimeout(() => {
                hat1.style.removeProperty('animation')
            }, 500)
            hat2.style.animation = "openhat2 1s ease"
            setTimeout(() => {
                hat2.style.removeProperty('animation')
            }, 500)
        }


        //rim animation
        if (i === 5) {
            all.style.animation = "rim .1s ease-out"
            setTimeout(() => {
                all.style.removeProperty('animation')
            }, 100)

        }

        //crash animation
        if (i === 7) {
            all.style.animation = "squash 1.1s ease-out"
            setTimeout(() => {
                all.style.removeProperty('animation')
            }, 1100)

        }

        //tom animation 
        if (i === 8) {
            tom.style.animation = "tom 0.5s linear"
            setTimeout(() => {
                tom.style.removeProperty('animation')
            }, 500)
            tomleft.style.animation = "tomlefts .5s linear"
            setTimeout(() => {
                tomleft.style.removeProperty('animation')
            }, 500)
            tomright.style.animation = "tomrights .5s linear"
            setTimeout(() => {
                tomright.style.removeProperty('animation')
            }, 500)
            tomtop.style.animation = "tomtop .5s linear"
            setTimeout(() => {
                tomtop.style.removeProperty('animation')
            }, 500)
        }

        //cowbell animation
        if (i === 6) {
            cowbell.style.animation = "cowbell .5s ease-in"
            setTimeout(() => {
                cowbell.style.removeProperty('animation')
            }, 500)
            cowbell2.style.animation = "cowbell .5s ease-in"
            setTimeout(() => {
                cowbell2.style.removeProperty('animation')
            }, 500)

        }
        //light animation
        if (i === i) {
            light.style.background = "rgb(143, 238, 128)"
            setTimeout(() => {
                light.style.background = 'rgb(247, 117, 117)'
            }, 100)
            

        }


    });
}

document.addEventListener("keydown", function (event) {
    for (let i = 0; i < drums.length; i++) {
        if (drums[i].classList.contains(event.key)) {
            new Audio("sounds/" + drums[i].id + ".wav").play();

            //button animations  
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

                all.style.animation = "down 0.1s linear"
            setTimeout(() => {
                all.style.removeProperty('animation')
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

                all.style.animation = "rumble .1s ease"
            setTimeout(() => {
                all.style.removeProperty('animation')
            }, 100)
            
            ani3.style.animation = "snare 1s ease"
            setTimeout(() => {
                ani3.style.removeProperty('animation')
            }, 100)
            if (i === 3 && rotate === 0) {

                ani2.style.animation = "rotateright 0.05s ease"
                rotate = 1
                setTimeout(() => {
                    ani2.style.removeProperty('animation')
                }, 50)

            } else if (i === 3 && rotate === 1) {

                ani2.style.animation = "rotateleft 0.05s ease"
                rotate = 0
                setTimeout(() => {
                    ani2.style.removeProperty('animation')
                }, 50)
            }

            ani1.style.animation = "rotateright 0.05s ease"
            rotate = 1
            setTimeout(() => {
                ani1.style.removeProperty('animation')
            }, 50)
            }

            //rim animation
            if (i === 5) {
                all.style.animation = "rim .1s ease-out"
                setTimeout(() => {
                    all.style.removeProperty('animation')
                }, 100)

            }
            //hat 2 animation
            if (i === 4) {
                hat1.style.animation = "openhat1 .5s linear"
                setTimeout(() => {
                    hat1.style.removeProperty('animation')
                }, 500)
                hat2.style.animation = "openhat2 1s ease"
                setTimeout(() => {
                    hat2.style.removeProperty('animation')
                }, 500)
            }
            //tom animation
            if (i === 8) {
                tom.style.animation = "tom 0.5s linear"
                setTimeout(() => {
                    tom.style.removeProperty('animation')
                }, 500)
                tomleft.style.animation = "tomlefts .5s linear"
                setTimeout(() => {
                    tomleft.style.removeProperty('animation')
                }, 500)
                tomright.style.animation = "tomrights .5s linear"
                setTimeout(() => {
                    tomright.style.removeProperty('animation')
                }, 500)
                tomtop.style.animation = "tomtop .5s linear"
                setTimeout(() => {
                    tomtop.style.removeProperty('animation')
                }, 500)
            }
            //crash animation
            if (i === 7) {
                all.style.animation = "squash 1.1s ease-out"
                setTimeout(() => {
                    all.style.removeProperty('animation')
                }, 1100)
    
            }

            //cowbell animation
        if (i === 6) {
            cowbell.style.animation = "cowbell .5s ease-out"
            setTimeout(() => {
                cowbell.style.removeProperty('animation')
            }, 500)
            cowbell2.style.animation = "cowbell .5s ease-out"
            setTimeout(() => {
                cowbell2.style.removeProperty('animation')
            }, 500)

        }
        // light animation
        if (i === i) {
            light.style.background = "rgb(143, 238, 128)"
            setTimeout(() => {
                light.style.background = 'rgb(247, 117, 117)'
            }, 100)
            

        }
        }
    }
})
function square(){
    anime({
        targets: '.square',
        backgroundColor: '#D667E0',
        // translateX:"10rem",
        width: "20rem",
        easing: 'easeInOutQuad',
        duration: 1000,
        // endDelay: 500,
        direction: "alternate",
        loop: true,
        delay: function(el, i, t){
            return anime.random(1000, 2000);
        }
    });
}
square();

const imgAfk = document.querySelectorAll(".afk");
let afkIndex = 0;
let afkAnim;

setInterval(() => {
    const change = 100;
    afkIndex += change;
    if(afkIndex > (imgAfk.length - 1) * 100){
        afkIndex = 0;
    }
    afkAnim = anime({
        targets: imgAfk,
        translateX: "-" + afkIndex + "%",
        duration: 750,
        easing: "easeInQuad"
    })
    afkAnim.play;
}, 3000)

const leftBtn = document.querySelector(".btn--left");
const rightBtn = document.querySelector(".btn--right");
const imgSlide = document.querySelectorAll(".slide");
let slideIndex = 0;
let slideAnim;

function slideImg(change, target){
    slideIndex += change;
    console.log(slideIndex)
    if(slideIndex < 0){
        slideIndex = (target.length - 1) * 100;        
    }
    else if(slideIndex > (target.length - 1) * 100){
        slideIndex = 0;
    }
    slideAnim = anime({
        targets: target,
        translateX: "-" + slideIndex + "%",
        duration: 500,
        easing: "easeInQuad"
    })
    slideAnim.play;
}

leftBtn.addEventListener("click", () => {
    const change = -100;
    slideImg(change, imgSlide)
})


rightBtn.addEventListener("click", () => {
    const change = 100;
    slideImg(change, imgSlide);
})

const dots = document.querySelectorAll(".dot-indicator")
const imgDot = document.querySelectorAll(".dots");
let dotsIndex = 0;

function dotsImg(change, target){
    dotsIndex = change * 100;

    slideAnim = anime({
        targets: target,
        translateX: "-" + dotsIndex + "%",
        duration: 500,
        easing: "easeInQuad"
    })
    slideAnim.play;
}

for(let i = 0; i < dots.length; ++i){
    dots[i].addEventListener("click", () => {
        const change = i;
        dotsImg(change, imgDot)
    })
}




// anime({
//     targets: '.basic-staggering-demo .el',
//     translateX: 270,
//     delay: anime.stagger(100) // increase delay by 100ms for each elements.
//   });
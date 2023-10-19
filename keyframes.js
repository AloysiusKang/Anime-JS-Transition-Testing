const squareEl = document.querySelector(".boxloop")

function squareloop(t){
    anime({
        targets: t,
        keyframes:[
            {translateX: "20rem", duration: 500},
            {translateY: "20rem", duration: 500},
            {translateX: "0rem", duration: 500},
            {translateY: "0rem", duration: 500},
        ],

        loop: true,
        easing: "spring(1, 80, 15, 0)",
        // direction: "alternate"
    })
}
squareloop(squareEl);
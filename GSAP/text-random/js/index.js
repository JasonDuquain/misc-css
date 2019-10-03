
let text = document.querySelector('.split')

let split = new SplitText(text);

function random(min, max) {
    return (Math.random() * (max - min) + min);
}

split.chars.forEach((el, idx) => {
    TweenMax.from(el, 2.5, {
        opacity: 0,
        x: random(-500,500),
        y: random(-500,500),
        z: random(-500,500),
        scale: 8.1,
        delay: idx * .02,
        yoyo: true,
        repeat: -1,
        repeatDelay: 4 
    });
});








/* COMPLETE

let text = document.querySelector('.split')

let split = new SplitText(text);

function random(min, max) {
    return (Math.random() * (max - min) + min);
}

split.chars.forEach((el, idx) => {
    TweenMax.from(el, 2.5, {
       opacity: 0,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        scale: 8.1,
        delay: idx * .02,
        yoyo: true,
        repeat: -1,
        repeatDelay: 10 
    })
})



*/



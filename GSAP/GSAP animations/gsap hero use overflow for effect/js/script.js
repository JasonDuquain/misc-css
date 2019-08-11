
let tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 2});
let perfect = new SplitText('.perfect', { type: 'chars, lines' });

tl.from('.joinus', 2.4, {
    y: 500,
    ease: Power2.easeOut
})
.from('.welcome', 2.5, {
    x: -500,
    ease: Power2.easeOut
}, "-=2")
.staggerFrom(perfect.chars, .7, {
    opacity: 0,
    y: 70,
    rotation: -30,
    ease: Power4.easeInOut
}, .1, "-=2.3")




/* COMPLETE:

let tl = new TimelineMax({repeat: 1, yoyo: true, repeatDelay: 2});


let perfect = new SplitText('.perfect', {type: 'chars, lines'})



tl.from('.joinus', 2.4, {
    y: 500,
    ease: Power2.easeOut
})
.from('.welcome', 2.5, {
    x: -500,
    ease: Power2.easeOut
}, "-=2")
.staggerFrom(perfect.chars, .7, {
    y: 70,
    rotation: -30,
    ease: Power4.easeInOut
}, .1, "-=2.3")



*/


const container = document.getElementById('container');
const boxLoader = document.getElementById('boxLoader'); //SVG




/* COMPLETE


const container = document.getElementById('container');
const boxLoader = document.getElementById('boxLoader'); //SVG

TweenMax.set([boxLoader, container], {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50
})

let tl = new TimelineMax({ repeat: -1 });

tl.set(boxLoader, {
    transformOrigin: '0% 100%'
})
.to(boxLoader, 1, {
    rotation: -90,
    ease: Power4.easeInOut
})
.to(boxLoader, 0.2, {
    scaleX: 0.3,
    ease: Power1.easeIn
}, '-=0.9')
.to(boxLoader, 1, {
    left: '+=50',
    ease: Linear.easeNone
}, '-=1')
.to(boxLoader, 0.2, {
    scaleX: 1,
    ease: Power1.easeIn
}, '-=0.2')

tl.timeScale(1.3);



*/

const container = document.getElementById('container');
const boxLoader = document.getElementById('boxLoader'); //SVG




/* COMPLETE

const container = document.getElementById('container');
const boxLoader = document.getElementById('boxLoader'); //SVG

gsap.set([boxLoader, container], {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50
})

let tl = gsap.timeline({ repeat: -1 });

tl.set(boxLoader, {
    transformOrigin: '0% 100%'
})
.to(boxLoader, {
    rotation: -90,
    ease: Power4.easeInOut,
    duration: 1
})
.to(boxLoader, {
    scaleX: 0.3,
    ease: Power1.easeIn,
    duration: .2
}, '-=0.9')
.to(boxLoader, {
    left: '+=50',
    ease: Linear.easeNone,
    duration: 1
}, '-=1')
.to(boxLoader, {
    scaleX: 1,
    ease: Power1.easeIn,
    duration: 0.2
}, '-=0.2')

tl.timeScale(1.3);




*/

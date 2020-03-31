const container = document.getElementById('container');
const loader = document.getElementById('loader'); // SVG
const circleL = document.getElementById('circleL'); // ELLIPSE
const circleR = document.getElementById('circleR'); // ELLIPSE
const jump = document.getElementById('jump'); // BIG HALF CIRCLE



gsap.set([container, loader], {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50
});

gsap.set(jumpRef, {
    transformOrigin: '50% 110%',
    scaleY: -1,
    alpha: 0.05
});

let tl = gsap.timeline({ repeat: -1 });
















//GSDevTools.create()
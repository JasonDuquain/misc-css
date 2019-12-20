const container = document.getElementById('container');
const loader = document.getElementById('loader'); // SVG
const circleL = document.getElementById('circleL'); // ELLIPSE
const circleR = document.getElementById('circleR'); // ELLIPSE
const jump = document.getElementById('jump'); // BIG HALF CIRCLE

const jumpRef = jump.cloneNode();
loader.append(jumpRef);


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

tl.set([jump, jumpRef], {
    drawSVG: '0% 0%'
})
.set([circleL, circleR], {
    attr: { rx: 0, ry: 0 }
})
.to([jump, jumpRef], {
    drawSVG: '0% 30%',
    ease: Linear.easeNone,
    duration: 0.4
})
.to(circleL, {
    attr: {
        rx: '+=30',
        ry: '+=10'
    },
    alpha: 0,
    ease: Power1.easeOut,
    duration: 2
})
.to([jump, jumpRef], {
    drawSVG:'50% 80%',
    ease:Linear.easeNone,
    duration: 1
}, '<.1')
.to([jump, jumpRef], {
    drawSVG:'100% 100%',
    ease:Linear.easeNone,
    duration: 0.7
}, '>-.1')
.to(circleR, {
   attr: {
       rx:'+=30',
       ry:'+=10'
   },
   alpha:0,
   ease:Power1.easeOut,
    duration: 2
}, '>-0.2');

tl.timeScale(2.7); 



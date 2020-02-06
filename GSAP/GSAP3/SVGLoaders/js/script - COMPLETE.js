const container = document.getElementById('container');
const loader = document.getElementById('loader'); // SVG
const circleL = document.getElementById('circleL'); // ELLIPSE
const circleR = document.getElementById('circleR'); // ELLIPSE
const jump = document.getElementById('jump'); // BIG HALF CIRCLE

const jumpRef = jump.cloneNode();
loader.append(jumpRef);

const jumps = Array.from([jump, jumpRef]);
const linearEaseNone = Linear.easeNone;

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

tl.set(jumps, { drawSVG: '0% 0%' })
tl.set([circleL, circleR], {
    attr: { rx: 0, ry: 0 }
})
.to(jumps, {
    drawSVG: '0% 30%',
    ease: linearEaseNone,
    duration: 0.4
})
.to(circleL, {
    attr: { rx: 30, ry: 10 },
    alpha: 0,
    ease: Power1.easeOut,
    duration: 2
})
.to(jumps, {
    drawSVG: '50% 80%',
    ease: linearEaseNone,
    duration: 0.7
}, "<-.1")
.to(jumps, {
    drawSVG: '100% 100%',
    ease: linearEaseNone,
    duration: 0.7
}, ">-.1")
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

//GSDevTools.create()
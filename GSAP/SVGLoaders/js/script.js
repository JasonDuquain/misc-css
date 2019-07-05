const container = document.getElementById('container');
const loader = document.getElementById('loader'); // SVG
const circleL = document.getElementById('circleL'); // ELLIPSE
const circleR = document.getElementById('circleR'); // ELLIPSE
const jump = document.getElementById('jump'); // BIG HALF CIRCLE




/* COMPLETE

const container = document.getElementById('container');
const loader = document.getElementById('loader'); //SVG
const circleL = document.getElementById('circleL'); //ELLIPSE
const circleR = document.getElementById('circleR'); //ELLIPSE
const jump = document.getElementById('jump'); //HALF CIRCLE

const jumpRef = jump.cloneNode();
loader.append(jumpRef)

TweenMax.set([container, loader], {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50
});

TweenMax.set(jumpRef, {
    transformOrigin: '50% 110%',
    scaleY: -1,
    alpha: 0.05
});

let myTimeline = new TimelineMax({ repeat: -1});

myTimeline.set([jump, jumpRef], {
    drawSVG: '0% 0%'
})
.set([circleL, circleR], {
    attr: {
        rx: 0,
        ry: 0
    }
})
.to([jump, jumpRef], .4, {
    drawSVG: '0% 30%',
    ease: Linear.easeNone
})
.to(circleL, 2, {
    attr: {
        rx: '+=30',
        ry: '+=10',
    },
    alpha: 0,
    ease:Power1.easeOut
}, '-=.1')
.to([jump, jumpRef], 1, {
    drawSVG:'50% 80%',
    ease:Linear.easeNone
}, '-=1.9')
.to([jump, jumpRef], 0.7, {
    drawSVG:'100% 100%',
    ease:Linear.easeNone
}, '-=0.9')
.to(circleR, 2, {
   attr: {
       rx:'+=30',
       ry:'+=10'
   },
   alpha:0,
   ease:Power1.easeOut
}, '-=.5');

myTimeline.timeScale(3); //https://greensock.com/docs/TimelineMax/timeScale



*/

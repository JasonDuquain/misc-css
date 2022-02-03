
const xmlns = "http://www.w3.org/2000/svg";  
const container = document.querySelector('.container');
  
gsap.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})

gsap.set('svg', { visibility: 'visible' })

gsap.defaults({ ease: Elastic.easeInOut.config(1, 0.82) } );

var tl = gsap.timeline({ paused:false, repeat:-1, yoyo:false, repeatDelay:1 , duration: 2});

// the "0" in "10" changes to a 9
tl.to('#tenZero', {
  morphSVG: { shape:'#nine', shapeIndex:6 },
  delay:1,
  duration: 2
})
// the "1" in "10" disappers
.to('#tenOne', {
  alpha:0,
  ease:Power2.easeOut,
  duration: 0.5
}, '-=1.5')
.to('#tenZero', {
  morphSVG:{shape:'#eight', shapeIndex:6},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#seven', shapeIndex:18},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#six', shapeIndex:18},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#five', shapeIndex:15},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#four', shapeIndex:1},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#three', shapeIndex:2},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#two', shapeIndex:2},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#one', shapeIndex:2},
  delay:1,
  duration: 2
})

//.add("playFromHere")

.to('#tenZero', {
  morphSVG:{shape:'#zero', shapeIndex:'auto'},
  delay:1,
  duration: 2
})

// the "1" in "10" reappears and scales up (next tween)
.to('#tenOne', {
  alpha:1,
  ease:Power2.easeOut,
  delay:2,
  duration: 1
})
.from('#tenOne', { 
  scale:0.3,
  immediateRender:false,
  transformOrigin:'50% 100%',
  duration: 1
},'-=1')

.to('#tenZero', {
  ease:Power2.easeOut,
  x:'+=45',
  duration: 1
},'-=1')
//tl.timeScale(3)
//tl.play("playFromHere")



/* COMPLETE

const xmlns = "http://www.w3.org/2000/svg";  
const container = document.querySelector('.container');
  
gsap.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})

gsap.set('svg', { visibility: 'visible' })

gsap.defaults({ ease: Elastic.easeInOut.config(1, 0.82} );

var tl = gsap.timeline({ paused:false, repeat:-1, yoyo:false, repeatDelay:1 , duration: 2});
tl.to('#tenZero', {
  morphSVG:{shape:'#nine', shapeIndex:6},
  delay:1,
  duration: 2
})
.to('#tenOne', {
  alpha:0,
  ease:Power2.easeOut,
  duration: 0.5
}, '-=1.5')
.to('#tenZero', {
  morphSVG:{shape:'#eight', shapeIndex:6},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#seven', shapeIndex:18},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#six', shapeIndex:18},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#five', shapeIndex:15},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#four', shapeIndex:1},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#three', shapeIndex:2},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#two', shapeIndex:2},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#one', shapeIndex:2},
  delay:1,
  duration: 2
})
.to('#tenZero', {
  morphSVG:{shape:'#zero', shapeIndex:'auto'},
  delay:1,
  duration: 2
})
.to('#tenOne', {
  alpha:1,
  ease:Power2.easeOut,
  delay:2,
  duration: 1
})
.from('#tenOne', { 
  scale:0.3,
  immediateRender:false,
  transformOrigin:'50% 100%',
  duration: 1
},'-=1')
.to('#tenZero', {
  ease:Power2.easeOut,
  x:'+=45',
  duration: 1
},'-=1')
tl.timeScale(3)

*/
var xmlns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

gsap.set('svg', { visibility: 'visible' })

let mainTl = gsap.timeline({ delay:0, repeat:0 })

mainTl.from(['.treePathMask','.treePotMask'],{
  drawSVG:'0% 0%',
  stroke:'#FFF',
	stagger: {
		each: 6
	},
  duration: gsap.utils.wrap([6, 1, 2]),
  ease:'linear'
})
.from('.treeStar', {
	duration: 3,
  scaleY:0,
  scaleX:0.15,
  transformOrigin:'50% 50%',
  ease: 'elastic(1,0.5)'
},'-=4')
.from('.treeBottomMask', {
  duration: 2,
  drawSVG:'0% 0%',
  stroke:'#FFF',
  ease:'linear'
})  
.to('.treeStarOutline', {
  duration: 1,
  opacity:1,
  ease:"rough({strength: 2, points: 16, template: linear, taper: none, randomize: true, clamp: false})"
},'-=1.2')

gsap.globalTimeline.timeScale(1.5);
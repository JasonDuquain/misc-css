var xmlns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

gsap.set('svg', { visibility: 'visible' })

let mainTl = gsap.timeline({ delay:0, repeat:0 })

mainTl.from(['.treePathMask','.treePotMask'], {
  
})
.from(".treeStar", {
  
})
.from('.treeBottomMask', {
  
})
.to('.treeStarOutline', {
  ease:"rough({strength: 2, points: 16, template: linear, taper: none, randomize: true, clamp: false})"
})

gsap.globalTimeline.timeScale(1.5);


/* START

var xmlns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

gsap.set('svg', { visibility: 'visible' })

let mainTl = gsap.timeline({ delay:0, repeat:0 })

mainTl.from(['.treePathMask','.treePotMask'], {
  
})
.from(".treeStar", {
  
})
.from('.treeBottomMask', {
  
})
.to('.treeStarOutline', {
  ease:"rough({strength: 2, points: 16, template: linear, taper: none, randomize: true, clamp: false})"
})

gsap.globalTimeline.timeScale(1.5);

*/



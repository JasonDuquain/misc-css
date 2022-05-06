/* 
tl.recent( ) : [Tween | Timeline | CB]
--Returns the most recently added child tween/timeline/cb regardless of its position in the timeline
*/

let circlesHolder = document.querySelector(".circlesHolder")
let btn = document.querySelector(".btn")

function createCircles(total) {
	for (var i = 0; i < total; i++){
		let circle = document.createElement("div")
		let circleWrapper = document.createElement("div")
		circle.setAttribute("class", "circle")
		circlesHolder.append(circleWrapper)
		circleWrapper.append(circle)
		gsap.set(circleWrapper, { rotation: i * (360 / total) })
		gsap.set(circle, { x:60 })	
	}
}

createCircles(10)

const tl = gsap.timeline({ paused: true })
let exitTime = 0

tl.from(".circle", {
  x:30, 
  duration:0.4,
  stagger:{ each:0.05, ease:"power1" }
})

exitTime = tl.duration()

tl.addPause()
tl.to(".circle", {
	x:80,
	scale:2, 
	opacity:0,
	duration:0.3,
	stagger:{ each: 0.08, from: "end" }
})
tl.to(".circlesHolder", {
  rotation: 360, 
  duration: tl.recent().duration(), 
  ease:"power1.in"
}, "<")

btn.addEventListener("mouseenter", () => {
  (tl.time() < exitTime) ? tl.play() : tl.restart();
})

btn.addEventListener("mouseleave", () => {
  (tl.time() < exitTime) ? tl.reverse() : tl.play();
})
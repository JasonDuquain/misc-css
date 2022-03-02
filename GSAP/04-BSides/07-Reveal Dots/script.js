const numDots = 100;
const target = document.querySelector(".target")
const demo = document.querySelector(".demo")
const restart_btn = document.querySelector("#restart")
const tl = gsap.timeline({ defaults:{ duration:2 }, repeat:2, yoyo:true })
let tracers; 

//make a bunch of dots called tracer and place them in the demo element
function createTracers() {
	for (let i = 0; i < numDots; i++) {
		let tracer = document.createElement("div")
		tracer.setAttribute("class", "dot tracer")
		gsap.set(tracer, {scale:0.3})
		demo.appendChild(tracer)
		tracers = document.querySelectorAll(".tracer")
	}
}

function buildAnimation() {
	
}

//jump thru progress of timeline at set increments. use position of the target to place each tracer
function placeTracers() {
	tracers.forEach(function(element, index) {
			
	})			
}

function init() {
	createTracers()
	buildAnimation()
	placeTracers()
	tl.restart()
	restart_btn.addEventListener("click", () => tl.restart())
}

init()

/* START

const numDots = 100;
const target = document.querySelector(".target")
const demo = document.querySelector(".demo")
const restart_btn = document.querySelector("#restart")
const tl = gsap.timeline({ defaults:{ duration:2 }, repeat:2, yoyo:true })
let tracers; 

//make a bunch of dots called tracer and place them in the demo element
function createTracers() {
	for (let i = 0; i < numDots; i++) {
		let tracer = document.createElement("div")
		tracer.setAttribute("class", "dot tracer")
		gsap.set(tracer, {scale:0.3})
		demo.appendChild(tracer)
		tracers = document.querySelectorAll(".tracer")
	}
}

function buildAnimation() {
	
}

//jump thru progress of timeline at set increments. use position of the target to place each tracer
function placeTracers() {
	tracers.forEach(function(element, index) {
			
	})			
}

function init() {
	createTracers()
	buildAnimation()
	placeTracers()
	tl.restart()
	restart_btn.addEventListener("click", () => tl.restart())
}

init()

*/

/* COMPLETE

const numDots = 100;
const target = document.querySelector(".target")
const demo = document.querySelector(".demo")
const restart_btn = document.querySelector("#restart")
const tl = gsap.timeline({ defaults:{ duration:2 }, repeat:2, yoyo:true })
let tracers; 

//make a bunch of dots called tracers and place them in the demo element
function createTracers() {
	for(let i = 0; i < numDots; i++){
		let tracer = document.createElement("div")
		tracer.setAttribute("class", "dot tracer")
		gsap.set(tracer, { scale:0.3 })
		demo.appendChild(tracer)
		tracers = document.querySelectorAll(".tracer")
	}
}

function buildAnimation() {
	tl.to(target, {x:380, ease:"sine.in"})
  	.to(target, {y:380, ease:"sine"}, 0)
	  .to(target, {x:0, ease:"sine.in"})
	  .to(target, {y:0, ease:"sine"}, "<")
}

//jump thru progress of timeline at set increments. use position of the target to place each tracer
function placeTracers() {
	tracers.forEach(function(element, index){
		tl.progress(index / numDots) // (0, 0.01,0.02,0.03...to 1.0)
		tl.set(element, { x:gsap.getProperty(target, "x"), y:gsap.getProperty(target, "y"), opacity:0.5 }, tl.time())	// tl.time is what makes the tracer dots appear as the animation unfolds		
	})			
}

function init() {
	createTracers()
	buildAnimation()
	placeTracers()
	tl.restart()
	restart_btn.addEventListener("click", () => tl.restart())
}

init()

*/
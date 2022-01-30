gsap.set(".wrapper", {autoAlpha:1}) // avoid FOUC

const next_btn = document.querySelector("#next_btn")
const prev_btn = document.querySelector("#prev_btn")
const autoPlay_btn = document.querySelector("#autoPlay_btn")
let autoPlay = true;

const tl = gsap.timeline({ 
	defaults: { duration:0.3, opacity:0 } 
})

//when the timer is done playing the timeline will play
const timer = null;

tl.add("start")
.from(".slide1", {})
.addPause("+=0")
.to(".slide1", {opacity:0})

.from(".slide2", {}, "slide2")
.addPause("+=0")
.to(".slide2", {opacity:0})

.from(".slide3", {})
.addPause("+=0")
.to(".slide3", {opacity:0})

.from(".slide4", {})

//if autoPlay is true then timeline will pause until timer is done playing
function checkAutoPlay() {
	
}

function stopAutoPlay() {
	
}

//if we are on the last slide then go back to beginning
next_btn.addEventListener("click", ()=> {
	if (tl.progress() == 1) {
		tl.play(0)
	} else {
		tl.play()
	}
})

//do not allow reversing if we are on the first slide
prev_btn.addEventListener("click", ()=> {
	if (tl.previousLabel() != "start") {
		tl.reverse()
	}	
})

autoPlay_btn.addEventListener('change', (event) => {
	console.log("changed");
})


/* START

gsap.set(".wrapper", {autoAlpha:1}) // avoid FOUC

const next_btn = document.querySelector("#next_btn")
const prev_btn = document.querySelector("#prev_btn")
const autoPlay_btn = document.querySelector("#autoPlay_btn")
let autoPlay = true;

const tl = gsap.timeline({ 
	defaults: { duration:0.3, opacity:0 } 
})

//when the timer is done playing the timeline will play
const timer = null;

tl.add("start")
.from(".slide1", {})
.addPause("+=0")
.to(".slide1", {opacity:0})

.from(".slide2", {}, "slide2")
.addPause("+=0")
.to(".slide2", {opacity:0})

.from(".slide3", {})
.addPause("+=0")
.to(".slide3", {opacity:0})

.from(".slide4", {})

//if autoPlay is true then timeline will pause until timer is done playing
function checkAutoPlay() {
	
}

function stopAutoPlay() {
	
}

//if we are on the last slide then go back to beginning
next_btn.addEventListener("click", ()=> {
	if (tl.progress() == 1) {
		tl.play(0)
	} else {
		tl.play()
	}
})

//do not allow reversing if we are on the first slide
prev_btn.addEventListener("click", ()=> {
	if (tl.previousLabel() != "start") {
		tl.reverse()
	}	
})

autoPlay_btn.addEventListener('change', (event) => {
	console.log("changed");
})

*/
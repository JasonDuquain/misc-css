/* pt1 coding starts at 7:35 */

gsap.set(".wrapper", { autoAlpha: 1 })

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
.to(".slide1", { opacity: 0 })

.from(".slide2", {}, "slide2")
.addPause("+=0")
.to(".slide2", { opacity: 0 })

.from(".slide3", {})
.addPause("+=0")
.to(".slide3", { opacity: 0 })

.from(".slide4", {})

//if autoPlay is true then tl will pause until timer is done playing
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

gsap.set(".wrapper", { autoAlpha: 1 })

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
.to(".slide1", { opacity: 0 })

.from(".slide2", {}, "slide2")
.addPause("+=0")
.to(".slide2", { opacity: 0 })

.from(".slide3", {})
.addPause("+=0")
.to(".slide3", { opacity: 0 })

.from(".slide4", {})

//if autoPlay is true then tl will pause until timer is done playing
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


/* COMPLETE

gsap.set(".wrapper", { autoAlpha: 1 }) 

const next_btn = document.querySelector("#next_btn")
const prev_btn = document.querySelector("#prev_btn")
const autoPlay_btn = document.querySelector("#autoPlay_btn")
let autoPlay = false;

const tl = gsap.timeline({ 
	defaults: { duration: 0.3, opacity: 0 },
	onComplete: stopAutoPlay 
})

//when the timer is done playing the timeline will play
const timer = gsap.from(".bar", {
	scaleX: 0,
	transformOrigin: "0% 50%",
	duration: 2,
	onComplete: () => {
		tl.play()
		gsap.to(".bar", { opacity: 0, duration: 0.2 })
	}
}).pause()

tl.add("start")
.from(".slide1", {})
.addPause("+=0", checkAutoPlay)
.to(".slide1", { opacity: 0 })

.from(".slide2", {}, "slide2")
.addPause("+=0", checkAutoPlay)
.to(".slide2", { opacity: 0 })

.from(".slide3", {})
.addPause("+=0", checkAutoPlay)
.to(".slide3", { opacity: 0 })

.from(".slide4", {})

// if autoPlay is true then tl will pause until timer is done playing
function checkAutoPlay() {
	if (autoPlay) {
		timer.restart();
		gsap.to(".bar", { opacity: 1, duration: 0.2 })
	}
}

function stopAutoPlay() {
	autoPlay_btn.checked = false;
	autoPlay_btn.dispatchEvent(new Event("change"))
}

//if we are on the last slide then go back to beginning
next_btn.addEventListener("click", ()=> {
	if (tl.progress() == 1) {
		tl.play(0)
	} else {
		tl.play()
	}
	stopAutoPlay()
})

//do not allow reversing if we are on the first slide
prev_btn.addEventListener("click", ()=> {
	if (tl.previousLabel() != "start") {
		tl.reverse()
	}	
	stopAutoPlay()
})

autoPlay_btn.addEventListener('change', (event) => {
	if (event.currentTarget.checked) {
		(tl.progress() === 1) ? tl.restart() : tl.play(tl.time() + 0.001)
		autoPlay = true;
	} else {
		timer.pause();
		gsap.to(".bar", { opacity: 0, duration: 0.2 })
		autoPlay = false;
	}
})

*/
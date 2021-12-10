gsap.registerPlugin(GSDevTools, SplitText)
let split;
let animation = gsap.timeline({ repeat: 2, yoyo: true, repeatDelay: 0.3 })

function init() {
	gsap.set(".wrapper", { autoAlpha: 1 })
	
}

window.addEventListener("load", init)

/* COMPLETE

gsap.registerPlugin(GSDevTools, SplitText)
let split;
let animation = gsap.timeline({ repeat: 2, yoyo: true, repeatDelay: 0.3 })

function init() {
	gsap.set(".wrapper", {autoAlpha:1})
	split = new SplitText("h1", {type:"chars"})
	animation.from(split.chars, {opacity:0, y:50, ease:"back(4)", stagger:0.05})
	GSDevTools.create({animation:animation})
}

window.addEventListener("load", init)

*/

/* START

gsap.registerPlugin(GSDevTools, SplitText)
let split;
let animation = gsap.timeline({ repeat: 2, yoyo: true, repeatDelay: 0.3 })

function init() {
	gsap.set(".wrapper", { autoAlpha :1 })
	
}

window.addEventListener("load", init)

*/
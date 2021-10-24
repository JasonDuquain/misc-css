let split
let animation = gsap.timeline({id:"animation", repeat:10, repeatDelay:1})


function init() {
	split = new SplitText("p", {type:"lines"})
	gsap.set(".wrapper", {autoAlpha:1})
	animation.from(split.lines, { opacity: 0, rotationX: -90, rotationY: -45, transformOrigin: "50% 50% -150", stagger: 0.5 })	
	GSDevTools.create({animation:animation})
}


window.addEventListener("load", init)
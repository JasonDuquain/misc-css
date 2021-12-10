let split;
let animation = gsap.timeline({ id: "animation", repeat: 2, repeatDelay: 1 })


function init() {
	split = new SplitText("p", {type: "lines"})
	gsap.set(".wrapper", { autoAlpha: 1 })
		
	GSDevTools.create({ animation: animation })
}


window.addEventListener("load", init);

/* START

let split;
let animation = gsap.timeline({ id: "animation", repeat: 2, repeatDelay: 1 })


function init() {
	split = new SplitText("p", {type: "lines"})
	gsap.set(".wrapper", { autoAlpha: 1 })
		
	GSDevTools.create({ animation: animation })
}


window.addEventListener("load", init);

*/
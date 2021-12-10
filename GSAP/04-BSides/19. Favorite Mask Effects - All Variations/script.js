gsap.registerPlugin(SplitText, GSDevTools)

function init() {
	gsap.set(".wrapper", {autoAlpha:1})
	

	//GSDevTools.create({animation:animation})
}


window.addEventListener('load', init);


window.addEventListener('load', init);

/*START

gsap.registerPlugin(SplitText, GSDevTools)

function init() {
	gsap.set(".wrapper", {autoAlpha:1})
	

	//GSDevTools.create({animation:animation})
}


window.addEventListener('load', init);

*/

/* COMPLETE

gsap.registerPlugin(SplitText, GSDevTools)

function init() {
	gsap.set(".wrapper", {autoAlpha:1})
	let taglineSplit = new SplitText("h2", { type: "chars, words" });
	
	let animation = gsap.timeline()
	// slide from left
	//.from(".logo", { width: 0, ease: "power1.in", duration: 0.3 })
	//.from(taglineSplit.words, { yPercent: -100, stagger: 0.05 })
	
	// slide from middle
	//.from("h1", { yPercent: 100 })
	//.from("h2", { yPercent: -100 }, 0)
	
	//wipe from right
	.from(".logo", { width: 0, x: 584 })
	.from("h1", { x: -584 }, 0)
	.from(".tagline", { width: 0 }, 0)
	
	GSDevTools.create({animation:animation})
}

window.addEventListener('load', init);

*/
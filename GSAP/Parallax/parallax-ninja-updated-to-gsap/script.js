const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

document.querySelectorAll(".parallax").forEach(layer => {
	
});

/* COMPLETE 

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

document.querySelectorAll(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth);
	console.log(movement) // -80, -160, -400, -640, -680, -800
	tl.to(layer, { y: movement, ease: "none" }, 0)
});

*/
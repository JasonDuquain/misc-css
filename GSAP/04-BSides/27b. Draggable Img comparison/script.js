function init() {
	//gsap.set(".gallery", { scale: 0.7 });
	gsap.to(".gallery", { autoAlpha: 1 });
	gsap.set(".dragger", { x: 320 });
}

Draggable.create(".dragger", {
	type: "x",
	bounds: ".gallery",
	onDrag: function () {
		let x = 640 - gsap.getProperty(this.target, "x");
		gsap.set(".clipped", {clipPath: `inset(0px ${x}px 0px 0px)`});
		// line above using template literals is same as
		// gsap.set(".clipped", {clipPath: "inset(0px " + x + "px 0px 0px)"});
	}
});

window.addEventListener("load", init);

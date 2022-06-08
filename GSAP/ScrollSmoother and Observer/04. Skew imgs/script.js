/* https://greensock.com/docs/v3/GSAP/gsap.quickTo() */

//let skewSetter = gsap.quickTo("img", "skewY");
//let clamp = gsap.utils.clamp(-20, 20);

ScrollSmoother.create({
	wrapper: "#wrapper",
	content: "#content",
	
});


/* COMPLETE

let skewSetter = gsap.quickTo("img", "skewY"); // fast
let clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

ScrollSmoother.create({
	wrapper: "#wrapper",
	content: "#content",
	smooth: 2,
	effects: true,
	onUpdate: self => skewSetter(clamp(self.getVelocity() / -50)),
	onStop: () => skewSetter(0)
});

*/
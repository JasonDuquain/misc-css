

const tl1 = gsap.timeline({repeat: -1})
tl1.to(".circle1", {y: -100, duration:1, ease: "none"})
tl1.to(".circle1", {y: 100, duration:2, ease: "none"})
tl1.to(".circle1", {y: 0, duration:1, ease: "none"})

const tl2 = gsap.timeline({repeat: -1})
tl2.to(".circle2", {y: 100, duration:1, ease: "none"})
tl2.to(".circle2", {y: -100, duration:2, ease: "none"})
tl2.to(".circle2", {y: 0, duration:1, ease: "none"})

const tl3 = gsap.timeline({repeat: -1})
tl3.to(".circle3", {y: -100, duration:1, ease: "none"})
tl3.to(".circle3", {y: 100, duration:2, ease: "none"})
tl3.to(".circle3", {y: 0, duration:1, ease: "none"})

const tl4 = gsap.timeline({repeat: -1})
tl4.to(".circle4", {y: 100, duration:1, ease: "none"})
tl4.to(".circle4", {y: -100, duration:2, ease: "none"})
tl4.to(".circle4", {y: 0, duration:1, ease: "none"})

const tl5 = gsap.timeline({repeat: -1});
tl5.to(".circle5", {y: -100, duration:1, ease: "none"})
tl5.to(".circle5", {y: 100, duration:2, ease: "none"})
tl5.to(".circle5", {y: 0, duration:1, ease: "none"})

document.body.addEventListener("click", () =>
	gsap.globalTimeline.paused(!gsap.globalTimeline.paused())
)



/* START

const tl1 = gsap.timeline({repeat: -1})
tl1.to(".circle1", {y: -100, duration:1, ease: "none"})
tl1.to(".circle1", {y: 100, duration:2, ease: "none"})
tl1.to(".circle1", {y: 0, duration:1, ease: "none"})

const tl2 = gsap.timeline({repeat: -1})
tl2.to(".circle2", {y: 100, duration:1, ease: "none"})
tl2.to(".circle2", {y: -100, duration:2, ease: "none"})
tl2.to(".circle2", {y: 0, duration:1, ease: "none"})

const tl3 = gsap.timeline({repeat: -1})
tl3.to(".circle3", {y: -100, duration:1, ease: "none"})
tl3.to(".circle3", {y: 100, duration:2, ease: "none"})
tl3.to(".circle3", {y: 0, duration:1, ease: "none"})

const tl4 = gsap.timeline({repeat: -1})
tl4.to(".circle4", {y: 100, duration:1, ease: "none"})
tl4.to(".circle4", {y: -100, duration:2, ease: "none"})
tl4.to(".circle4", {y: 0, duration:1, ease: "none"})

const tl5 = gsap.timeline({repeat: -1});
tl5.to(".circle5", {y: -100, duration:1, ease: "none"})
tl5.to(".circle5", {y: 100, duration:2, ease: "none"})
tl5.to(".circle5", {y: 0, duration:1, ease: "none"})

document.body.addEventListener("click", () =>
	gsap.globalTimeline.paused(!gsap.globalTimeline.paused())
)

*/
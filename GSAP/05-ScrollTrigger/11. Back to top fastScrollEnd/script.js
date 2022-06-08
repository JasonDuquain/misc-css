const animation = gsap.timeline()
	.set(".message", { autoAlpha: 1 })
	.from(".message", { yPercent: 100, ease: "back" })
	.from("a", {xPercent: -100, duration: 0.35})

ScrollTrigger.create({
	trigger: "body",
	start: "75% bottom",
	animation: animation,
	toggleActions: "play none none reverse",
	fastScrollEnd: true
})
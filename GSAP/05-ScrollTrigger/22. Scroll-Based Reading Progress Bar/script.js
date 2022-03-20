
const progressHolder = document.querySelector(".progressHolder")
const progressBar = document.querySelector(".progressBar")



ScrollTrigger.create({
	trigger:"body", 
	markers: true,
	animation: gsap.to(progressBar, {
		scale: 1,
		ease: "none"
	}),
	start:"top top",
	scrub:true,
	end:"bottom bottom"
})

/* START

const progressHolder = document.querySelector(".progressHolder")
const progressBar = document.querySelector(".progressBar")



ScrollTrigger.create({
	trigger:"body", 
	markers: true,
	animation: gsap.to(progressBar, {
		scale: 1,
		ease: "none"
	}),
	start:"top top",
	scrub:true,
	end:"bottom bottom"
})

*/
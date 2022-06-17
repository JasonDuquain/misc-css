const progressHolder = document.querySelector(".progressHolder")
const progressBar = document.querySelector(".progressBar")

let tween = gsap.to(progressBar, {
	scale: 1,
	ease: "none",
	paused: true
})

ScrollTrigger.create({
	trigger: "body",
	start: "top top",
	endTrigger: "main",
	end: "bottom bottom",
	markers: true,
	once: true,
	onLeave: () => {
		progressHolder.classList.remove("fixed")
	},
	onUpdate: self => {
		if (self.progress > tween.progress()) {
			tween.progress(self.progress)
		}
	}
})

/* START

const progressHolder = document.querySelector(".progressHolder")
const progressBar = document.querySelector(".progressBar")



ScrollTrigger.create({
	trigger: "body", 
	markers: true,
	animation: gsap.to(progressBar, {
		scale: 1,
		ease: "none"
	}),
	start: "top top",
	scrub: true,
	end: "bottom bottom"
})

*/
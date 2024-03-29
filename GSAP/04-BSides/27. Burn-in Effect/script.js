let images = gsap.utils.toArray(".gallery img")
let tl = gsap.timeline({}) 

function init() {
	gsap.set(".gallery", { autoAlpha: 1 })
	gsap.set(images, { opacity: 0 })
	
	images.forEach(function(image, index) {
		tl.set(image, { opacity: 1 })
		.fromTo(image, {
			filter: 'contrast(0.5) brightness(6)'
		}, {
			filter: 'contrast(1) brightness(1)',
			ease: "power2"
		})
		.to(image, {
			filter: 'contrast(0.5) brightness(6)',
			duration: 0.2,
			ease: "power2.in"
		}, "+=0.8")
		
	})
	
	GSDevTools.create({animation:tl}) 
}


window.addEventListener("load", (event) => {
	init()
})


/* START

let images = gsap.utils.toArray(".gallery img")
let tl = gsap.timeline({}) 

function init() {
	
	
	images.forEach(function(image, index) {
		
	})
	
	GSDevTools.create({animation:burn}) 
}


window.addEventListener("load", (event) => {
	init()
})

*/
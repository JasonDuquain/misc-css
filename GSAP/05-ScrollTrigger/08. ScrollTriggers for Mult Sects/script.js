
let headings = document.querySelectorAll("h1");

headings.forEach(element => {
  
});

/* COMPLETE

let banners = document.querySelectorAll(".banner")

banners.forEach( (element) => {
	let background = element.querySelector(".background")
	let headings = element.querySelectorAll("h1, h2")
	
	let tl = gsap.timeline()
	   .from(background, {backgroundPosition: "60% 0%", filter: "brightness(0.1)", duration: 1})
		.from(headings, {y: 200, stagger: 0.1}, 0)
	
	ScrollTrigger.create({
		trigger: element,
		start: "top 90%",
		toggleActions: "play none none reverse",
		animation: tl
	})
		
})

*/

/* START

let headings = document.querySelectorAll("h1");

headings.forEach(element => {
  
});

*/


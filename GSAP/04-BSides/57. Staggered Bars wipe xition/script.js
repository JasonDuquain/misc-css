
let t = gsap.to(".bar", {
	xPercent: -100,
	ease: "none",  
	duration: 1, 
	stagger: {
		each: 0.1,
		from: "end",
	}
})

function init() {
	gsap.set("body", { opacity: 1 })
	GSDevTools.create({ animation: t, paused: true })	
}

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  init()
});


/* START

let t = gsap.to(".bar", {
	xPercent: -100,
	ease: "none",  
	duration: 1, 
	stagger: {
		each: 0.1,
		from: "end",
	}
})

function init() {
	gsap.set("body", { opacity: 1 })
	GSDevTools.create({ animation: t, paused: true })	
}

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  init()
});

*/

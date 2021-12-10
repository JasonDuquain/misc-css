
// .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")



GSDevTools.create();


/* BASIC COUNTER - START 


GSDevTools.create();

*/

/*  CUSTOMIZABLE AND REUSABLE COUNTER COMPLETE
gsap.registerEffect({
	name: "counter",
	extendTimeline: true,
	defaults: { end: 0, duration: 0.5, ease: "power1", increment: 1 },
	effect: (targets, config) => {
		let tl = gsap.timeline()
		
		let num = targets[0].innerText.replace(/\,/g, "")
		targets[0].innerText = num
		
		tl.to(targets, {
			duration: config.duration,
			modifiers: {
				innerText: function(innerText) {
					return gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
				}
			},
			innerText: config.end,
			ease: config.ease
		})
		return tl
	}
})

let tl = gsap.timeline()
tl.from("#stat1", { opacity: 0 })
tl.counter("#coursesCount", { end: 5 }, "-=0.5")
tl.from("#stat2", { opacity: 0 })
tl.counter("#lessonsCount", { end: 90, increment: 5 }, "-=0.5")
tl.from("#stat3", { opacity: 0 })
tl.counter("#studentsCount", { end: 1860, increment: 10 }, "-=0.5")


GSDevTools.create();
*/
/* at 13:25 just watch and then he shows it at 14:45 but its hard to follow as he scrolls so just update it based on the COMPLETED code */

let animation = gsap.timeline()


GSDevTools.create({animation:animation});

/* START

let animation = gsap.timeline()


GSDevTools.create({animation:animation});


*/

/* COMPLETE
gsap.registerEffect({
	name: "clip",
	defaults: { duration:1, ease:"power1.in", direction:"full" },
	extendTimeline: true,
	effect: function(targets, config){
		let direction = {
			top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
			bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
			left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
			right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
			full:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			midX:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
			midY:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
			center:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
		}
		
		//check first run - GSAP can only animate to a clipPath setting if a clipPath already exists
		console.log(window.getComputedStyle(targets[0]).clipPath)

		if (window.getComputedStyle(targets[0]).clipPath !="none") {
			console.log("has a clipPath")
		} else {
			//first run
			console.log("does not a clipPath")
			gsap.set(targets, {clipPath:direction["full"]})
		}
		
		let animation = gsap.timeline()
		.to(targets, {clipPath:direction[config.direction], duration:config.duration, ease:config.ease})
		
		return animation
	}
})

let target = document.querySelector(".happy")
let animation = gsap.timeline()	
	.clip(target, {direction:"right"})
	.clip(target) // was "full" but that is the default so no need to put it here
	.clip(target, {direction:"left"})
	.clip(target) // ...
	.clip(target, {direction:"center"})
	.clip(target) // ...
   .clip(target, {direction:"midX"})
	.clip(target) // ...
	.clip(target, {direction:"midY"})

GSDevTools.create({animation:animation});

*/

/* START

let animation = gsap.timeline()


GSDevTools.create({animation:animation});


*/
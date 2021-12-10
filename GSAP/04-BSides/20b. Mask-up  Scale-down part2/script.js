
gsap.set(".wrapper", { autoAlpha: 1, scale: 0.8, transformOrign: "top left" }) 

gsap.registerEffect({
    name: "maskUpScaleDown",
    defaults: {stagger:0, overshootScale:1}, 
    extendTimeline: true,
	  effect: (targets, config) => {
		  gsap.set(targets, {
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				rotation: 0.1,
				backgroundPosition: "50% 50%",
				backgroundSize: "100% 100%",
				scale: config.overshootScale,
				opacity: 0
			})
      let tl = gsap.timeline()
		  tl.to(targets, {autoAlpha:1, duration:0.1, stagger:config.stagger})
		  tl.from(targets, {clipPath:"polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)", stagger:config.stagger}, 0), 
		  tl.from(targets, {backgroundSize:"200% 200%", stagger:config.stagger}, 0)

		 if (config.overshootScale > 1) {
			 tl.to(targets, {scale: 1, duration: 1, stagger: config.stagger}, 0.5)
		 }
		  
		 return tl
    },
});


const tl = gsap.timeline()
tl.maskUpScaleDown(".image", { stagger: 1, overshootScale: 1.1 }) 

GSDevTools.create({animation:tl})


/* COMPLETE

gsap.set(".wrapper", { autoAlpha: 1, scale: 0.8, transformOrign: "top left" }) 

gsap.registerEffect({
    name: "maskUpScaleDown",
    defaults: {stagger:0, overshootScale:1}, 
    extendTimeline: true,
	 effect: (targets, config) => {
		  gsap.set(targets, {
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				rotation: 0.1,
				backgroundPosition: "50% 50%",
				backgroundSize: "100% 100%",
				scale: config.overshootScale,
				opacity: 0
			})
      let tl = gsap.timeline()
		  tl.to(targets, {autoAlpha:1, duration:0.1, stagger:config.stagger})
		  tl.from(targets, {clipPath:"polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)", stagger:config.stagger}, 0), 
		  tl.from(targets, {backgroundSize:"200% 200%", stagger:config.stagger}, 0)

		 if (config.overshootScale > 1) {
			 tl.to(targets, {scale: 1, duration: 1, stagger: config.stagger}, 0.5)
		 }
		  
		 return tl
    },
});


const tl = gsap.timeline()
tl.maskUpScaleDown(".image", { stagger: 1, overshootScale: 1.1 }) 

GSDevTools.create({animation:tl})

*/

const tl = gsap.timeline()
tl.to(".slime", {
	
})

play.addEventListener("click", ()=> tl.restart())
GSDevTools.create({ animation:tl });


/* START

const tl = gsap.timeline()
tl.to(".slime", {
	
})

play.addEventListener("click", ()=> tl.restart())
GSDevTools.create({ animation:tl });

*/


/* COMPLETE

const tl = gsap.timeline()
tl.to(".slime", {
	keyframes: {
    "25%": { y: 0 },
    "50%": { y: -100, ease: "sine" },
    "75%": { y: 0, ease: "sine.in" },
    "100%": { x: 320, ease: "none" }
  },
  duration: 2
})

play.addEventListener("click", ()=> tl.restart())
GSDevTools.create({ animation:tl });

*/

gsap.defaults({ease:"none"})


/* START

gsap.defaults({ease:"none"})

*/

/* COMPLETE
gsap.defaults({ease:"none"})

let tl = gsap.timeline({scrollTrigger:{
	trigger:".carWrapper",
	start:"bottom 100%",
	end:"bottom 0%",
  markers: true,
	scrub:0.5
}})

.to("#car", {duration:1, y:"-=180"})
.to("#road", {duration:1, y:"+=180"}, 0)
.to("#trees", {duration:1, y:"+=250"}, 0) // trees are closer to our face so we want to use a higher distance for the parallax effect

*/
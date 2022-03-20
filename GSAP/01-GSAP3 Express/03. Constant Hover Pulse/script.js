
const cta = document.querySelector(".cta")

//create a repeating scale tween
const scaleTween = gsap.to(cta, { scale: 2, paused: true});


cta.addEventListener("mouseenter", function() {
	scaleTween.restart()
})

cta.addEventListener("mouseleave", function() {
	scaleTween.reverse()
})


/* START

const cta = document.querySelector(".cta")

//create a repeating scale tween
const scaleTween = gsap.to(cta, { scale: 2, paused: true});


cta.addEventListener("mouseenter", function() {
	scaleTween.restart()
})

cta.addEventListener("mouseleave", function() {
	scaleTween.reverse()
})

*/
var tl = gsap.timeline();
var duration = .75;

function init() {
  
}

window.addEventListener("load", function(event) {
	gsap.set("#demo", { autoAlpha: 1 });
	init();
});


/* COMPLETE

var tl = gsap.timeline();
var duration = .75;

function init() {
  tl.fromTo('h1', {scale: 0}, {scale: 6, duration: duration, ease: "slow(0.5, 0.8)", stagger: duration})
  .from('h1', {opacity: 0, duration: duration, ease: "slow(0.5, 0.8, true)", stagger: duration}, "<")
}

window.addEventListener("load", function(event) {
	console.log("load");
	gsap.set("#demo", { autoAlpha: 1 });
	init();
});

*/

/* START

var tl = gsap.timeline();
var duration = .75;

function init() {
  
}

window.addEventListener("load", function(event) {
	gsap.set("#demo", { autoAlpha: 1 });
	init();
});

*/
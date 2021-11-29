/*
I want to focus on what happens visually when pinSpacing is either true (defualt) or false

-true: space will be added to the page to push content down vertically so that it will perfectly arrive in its "normal" position when pinning is de-activated.
-false: content will scroll behind the pinned element.
*/

gsap.registerPlugin(SplitText);

const animation = gsap.timeline();

function init() {
	const taglineSplit = new SplitText(".tagline_text", {type:"chars, words"});
	
	animation
		.from(".logo", {width:0, duration:0.8, ease:"power1.in"})
		.from(taglineSplit.words, {yPercent: -100, stagger: 0.05, duration: 0.3})
		
	ScrollTrigger.create({
		trigger: ".add_wrapper",
		animation: animation,
		markers: true,
		start: "top 50%"
	})
}

window.addEventListener('load', init);



/* START

gsap.registerPlugin(SplitText);

const animation = gsap.timeline();

function init() {
	const taglineSplit = new SplitText(".tagline_text", {type:"chars, words"});
	
	animation
		.from(".logo", {width:0, duration:0.8, ease:"power1.in"})
		.from(taglineSplit.words, {yPercent: -100, stagger: 0.05, duration: 0.3})
		
	ScrollTrigger.create({
		trigger: ".add_wrapper",
		animation: animation,
		markers: true,
		start: "top 50%"
	})
}

window.addEventListener('load', init);

*/
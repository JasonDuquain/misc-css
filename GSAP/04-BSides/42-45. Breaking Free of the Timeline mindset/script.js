/* pt1 coding starts at 7:20 */

gsap.set(".wrapper", {
	autoAlpha : 1, transformOrigin: "center top", scale: 0.65
});

const next_btn = document.querySelector("#next_btn")
const prev_btn = document.querySelector("#prev_btn")
const autoPlay_btn = document.querySelector("#autoPlay_btn")
let autoPlay = false;

const slides = gsap.utils.toArray(".slide");
const numSlides = slides.length;
let slideIndex = 0;
let currentSlide;
let animatingOut = false;

function hideSlide() {
	if (!animatingOut) {
		gsap.to(currentSlide, { opacity: 0, onComplete: showSlide })
		gsap.to(currentSlide.querySelector(".number"), { scale: 0 })
		animatingOut = true;
	}
}

function showSlide() {
	animatingOut = false;
	currentSlide = slides[slideIndex];
	gsap.to(currentSlide, { opacity: 1 })
	gsap.fromTo(currentSlide.querySelector(".number"), {
		scale: 0 
	}, { 
		scale: 1,
		onComplete: () => {
			if (autoPlay) {
				timer.restart()
			}
		} 
	})
}

showSlide()

next_btn.addEventListener("click", () => {
	if (autoPlay) {
		stopAutoPlay()
	}
	nextSlide()
});

prev_btn.addEventListener("click", () => {
	if (slideIndex > 0) {
		slideIndex--;
	} else {
		slideIndex = slides.length - 1;
	}
	if (autoPlay) {
		stopAutoPlay()
	}
	hideSlide()
});

function nextSlide() {
	if (slideIndex < numSlides - 1) {
		slideIndex++
	} else {
		slideIndex = 0
	}
	hideSlide()
}

autoPlay_btn.addEventListener("change", event => {
	if (event.currentTarget.checked) {
		nextSlide()
		autoPlay = true
	} else {
		timer.pause(0);
		autoPlay = false;
	}
});

function stopAutoPlay() {
	autoPlay_btn.checked = false;
	autoPlay_btn.dispatchEvent(new Event("change"))
}

const timer = gsap.from(".bar", {
	scaleX: 0,
	transformOrigin: "0% 50%",
	duration: 3,
	onComplete: () => {
		nextSlide()
	}
}).pause()

const dots = gsap.utils.toArray(".dot");

dots.forEach(function(dot, index) {
	dot.addEventListener("click", function() {
		slideIndex = index;
		if (autoPlay) {
			stopAutoPlay()
		}
		hideSlide()
	});
});



/* START

gsap.set(".wrapper", {
	autoAlpha : 1, transformOrigin: "center top", scale: 0.65
});

const next_btn = document.querySelector("#next_btn")
const prev_btn = document.querySelector("#prev_btn")
const autoPlay_btn = document.querySelector("#autoPlay_btn")
let autoPlay = false;

const slides = gsap.utils.toArray(".slide");
const numSlides = slides.length;
let slideIndex = 0;
let currentSlide;
let animatingOut = false;

function hideSlide() {
	
}

function showSlide(index) {
	
}


next_btn.addEventListener("click", () => {

});

prev_btn.addEventListener("click", () => {

});



function nextSlide() {
	
}

/// dont add all the code as he is going to clean this up after pasting
autoPlay_btn.addEventListener("change", event => {

});

function stopAutoPlay() {
	
}

const dots = gsap.utils.toArray(".dot");

dots.forEach(function(dot, index) {
	dot.addEventListener("click", function() {

	});
});

*/


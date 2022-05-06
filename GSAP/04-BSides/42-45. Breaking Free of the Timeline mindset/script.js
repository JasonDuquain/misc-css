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


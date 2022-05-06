let circlesHolder = document.querySelector(".circlesHolder");
let btn = document.querySelector(".btn");

function createCircles() {
	for (var i = 0; i < 12; i++){
		let circle = document.createElement("div")
		let circleWrapper = document.createElement("div")
		circle.setAttribute("class", "circle")
		circlesHolder.append(circleWrapper)
		circleWrapper.append(circle)
		gsap.set(circleWrapper, { rotation: i * 40 })
		gsap.set(circle, { x: 40 })	
	}
}

createCircles();

const ani = gsap.to(".circle", {
	x: 180,
	scale: 2,
	duration: 3,
	ease: "none",
	repeat: 1,
	yoyo: true,
	paused: true
});

btn.addEventListener("mouseenter", () => {
 ani.play()
});

btn.addEventListener("mouseleave", () => {
	
});


/* START

let circlesHolder = document.querySelector(".circlesHolder");
let btn = document.querySelector(".btn");

function createCircles() {
	for (var i = 0; i < 12; i++){
		let circle = document.createElement("div")
		let circleWrapper = document.createElement("div")
		circle.setAttribute("class", "circle")
		circlesHolder.append(circleWrapper)
		circleWrapper.append(circle)
		gsap.set(circleWrapper, { rotation: i * 40 })
		gsap.set(circle, { x: 40 })	
	}
}

createCircles();

const ani = gsap.to(".circle", {
	x: 180,
	scale: 2,
	duration: 3,
	ease: "none",
	repeat: 1,
	yoyo: true,
	paused: true
});

btn.addEventListener("mouseenter", () => {
 ani.play()
});

btn.addEventListener("mouseleave", () => {
	
});

*/
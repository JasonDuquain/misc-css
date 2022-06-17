let circlesHolder = document.querySelector(".circlesHolder");
let circle = document.createElement("div");
circle.setAttribute("class", "circle");
circle.textContent = "T";
circlesHolder.append(circle);

function createCircles(numCircles) {
	for (var i = 0; i < numCircles; i++) {
			
	}
}

createCircles(10);




/* START

let circlesHolder = document.querySelector(".circlesHolder");
let circle = document.createElement("div");
circle.setAttribute("class", "circle");
circle.textContent = "T";
circlesHolder.append(circle);

function createCircles(numCircles) {
	for (var i = 0; i < numCircles; i++) {
			
	}
}

createCircles(10);

*/


/* COMPLETE


let circlesHolder = document.querySelector(".circlesHolder");

function createCircles(numCircles, radius) {
	for (var i = 0; i < numCircles; i++) {
		let circle = document.createElement("div");
		let circleParent = document.createElement("div");
		circle.setAttribute("class", "circle");
		circleParent.setAttribute("class", "circleParent");
		circle.textContent = "T";
		gsap.set(circle, { x: radius, yPercent: -50 })
		gsap.set(circleParent, { 
			rotation: i * (360 / numCircles), 
			transformOrigin: "left center" 
		})
		circlesHolder.append(circleParent);
		circleParent.append(circle);
	}
}

createCircles(8, 100);

let animation = gsap.timeline()
animation.from(".circle", { 
	x: 0, 
	scale: 0, 
	duration: 0.4, 
	stagger: { each: 0.05, ease: "power1" } 
})
.to(".circle", { rotation: 360 })

*/


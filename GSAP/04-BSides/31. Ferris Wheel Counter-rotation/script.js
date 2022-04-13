let circlesHolder = document.querySelector(".circlesHolder")

function createCircles(numCircles, radius) {
	for (var i=0; i < numCircles; i++) {
		let rotation = i * (360 / numCircles);
		let circle = document.createElement("div")
		let circleParent = document.createElement("div")
		circle.setAttribute("class", "circle")
		circleParent.setAttribute("class", "circleParent")
		gsap.set(circle, {
			x: radius - 40,
			y: -4,
			rotation: -rotation,
			transformOrigin: "40px 8px"
		})
		gsap.set(circleParent, { 
			transformOrigin:"left center",
			rotation: rotation,
			width: radius,
			height: 4,
			left: "50%",
			top: "50%"
		})
		circlesHolder.append(circleParent)
		circleParent.append(circle)
	}	
}
	
createCircles(12, 200)
gsap.to(circlesHolder, { opacity: 1 })	
		
let animation = gsap.timeline()
animation.to(circlesHolder, {rotation:360, duration:8, ease:"none"})
.to(".circle", { rotation: "-=360", ease: "none", duration: 8 }, 0)

GSDevTools.create({ animation:animation, paused:true });


/* START

let circlesHolder = document.querySelector(".circlesHolder")

function createCircles(numCircles, radius) {
	for (var i = 0; i < numCircles; i++) {
		let circle = document.createElement("div")
		let circleParent = document.createElement("div")
		circle.setAttribute("class", "circle")
		circleParent.setAttribute("class", "circleParent")
		circle.textContent = "T"
		gsap.set(circle, {
			x: radius,
			yPercent: -50
		})
		gsap.set(circleParent, {
			transformOrigin: "left center",
			rotation: i * (360 / numCircles) 
		})
		circlesHolder.append(circleParent)
		circleParent.append(circle)
	}	
}
	
createCircles(1, 100)	
		
let animation = gsap.timeline()
animation.to(circlesHolder, {rotation:90, duration:8, ease:"none"})

GSDevTools.create({ animation:animation, paused:true });

*/
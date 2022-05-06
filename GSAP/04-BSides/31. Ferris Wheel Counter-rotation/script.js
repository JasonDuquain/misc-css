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
	
createCircles(12, 100)	
		
let animation = gsap.timeline()
animation.to(circlesHolder, {rotation: 90, duration: 8, ease: "none"})

GSDevTools.create({ animation: animation, paused: true });


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
	
createCircles(12, 100)	
		
let animation = gsap.timeline()
animation.to(circlesHolder, {rotation: 90, duration: 8, ease: "none"})

GSDevTools.create({ animation: animation, paused: true });

*/
gsap.defaults({ease:"none"});

let pxPerSecond = 150;
gsap.set(".bug", {
	backgroundColor: gsap.utils.wrap(["f6c", "#77bf98", "#4b9ae8"])
})

function moveMe(target) {

	let curPos = {
		x: gsap.getProperty(target, "x"),
		y: gsap.getProperty(target, "y"),
	}

	let newPos = {
		x: gsap.utils.random(0, 600),
		y: gsap.utils.random(0, 300),
	}

	let deltaX = curPos.x - newPos.x; // side A distance
	let deltaY = curPos.y - newPos.y; // side B distance
	let distance = Math.hypot(deltaX, deltaY);

	let duration = distance / pxPerSecond;

	let angleDeg = Math.atan2(newPos.y - curPos.y, newPos.x - curPos.x) * 180 / Math.PI;
	
	gsap.to(target, { 
		x: newPos.x,
		y: newPos.y,
		duration: duration,
		onComplete: moveMe,
		onCompleteParams: [target]
	}) 
	
}

moveMe(".bug")

document.addEventListener("click", () => gsap.globalTimeline.paused(!gsap.globalTimeline.paused()))



/* START

gsap.defaults({ease:"none"});

let pxPerSecond = 150;
gsap.set(".bug", {
	backgroundColor: gsap.utils.wrap(["f6c", "#77bf98", "#4b9ae8"])
})

function moveMe(target) {

	let curPos = {
		x: gsap.getProperty(target, "x"),
		y: gsap.getProperty(target, "y"),
	}

	let newPos = {
		x: gsap.utils.random(0, 600),
		y: gsap.utils.random(0, 300),
	}

	let deltaX = curPos.x - newPos.x; // side A distance
	let deltaY = curPos.y - newPos.y; // side B distance
	let distance = Math.hypot(deltaX, deltaY);

	let duration = distance / pxPerSecond;

	let angleDeg = Math.atan2(newPos.y - curPos.y, newPos.x - curPos.x) * 180 / Math.PI;
	
	gsap.to(target, { 
		x: newPos.x,
		y: newPos.y,
		duration: duration,
		onComplete: moveMe,
		onCompleteParams: [target]
	}) 
	
}

moveMe(".bug")

document.addEventListener("click", () => gsap.globalTimeline.paused(!gsap.globalTimeline.paused()))

*/
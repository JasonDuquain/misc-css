




/* START - PART 2

let bugs = gsap.utils.toArray(".bug");
let jerkLevel;

function moveMe(bug) {
	let endX
	let delay
	let rotation

	

	
}

bugs.forEach(el => moveMe(el));

document.addEventListener("click", () => {
	gsap.globalTimeline.paused(!gsap.globalTimeline.paused())
});


function checkWinner() {
	
}

*/


/* COMPLETE PART 1

gsap.to(".bug", {
	x: function() {
		return "+=" + gsap.utils.random(0, 100);
	},
	repeat: -1,
	repeatRefresh: true,
	onUpdate: function() {
		let finishPos = document.querySelector(".finishLine").getBoundingClientRect().left;
		//let tween = this;
		this.targets().forEach(function(el) {
			if (gsap.getProperty(el, "x") > finishPos) {
				gsap.to(el, { 
					filter: "brightness(2)", 
				  repeat: 6, 
				  yoyo: true, 
				  duration: 0.1 
			  })
				gsap.getTweensOf(el)[0].pause();
			}
		})
	}
});

*/


/* COMPLETE - Part 2

let bugs = gsap.utils.toArray(".bug");
let jerkLevel = 0.1;

function moveMe(bug) {
	let endX = (Power4.easeIn(Math.random()) * 200) + 25;
	let delay = Power4.easeIn(Math.random());
	let rotation = 0;

	if (Math.random() < jerkLevel) {
		endX = -endX;
		rotation = 180;
	}

	gsap.to(bug, { rotation: rotation, duration: 0.05 });

	gsap.to(bug, {
		duration: gsap.utils.random(0.5, 1.5),
		x: "+=" + endX,
		delay: delay,
		ease: "power3",
		onComplete: moveMe,
		onCompleteParams: [bug]
	});
}

bugs.forEach(el => moveMe(el));

document.addEventListener("click", () => {
	gsap.globalTimeline.paused(!gsap.globalTimeline.paused())
});

gsap.ticker.add(checkWinner);
function checkWinner() {
	let finishPos = document.querySelector(".finishLine").getBoundingClientRect().left;
	bugs.forEach(function(el) {
		if (gsap.getProperty(el, "x") > finishPos) {
			gsap.killTweensOf(".bug");
			gsap.to(el, {
				filter: "brightness(2)",
				repeat: 6,
				yoyo: true,
				duration: 0.1,
				delay: 0.001
			})
			gsap.ticker.remove(checkWinner)
		}
	})
}

*/



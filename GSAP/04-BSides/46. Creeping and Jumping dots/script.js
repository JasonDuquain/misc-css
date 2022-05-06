const tl = gsap.timeline({repeatRefresh:true, repeat:-1, onRepeat:checkDistance})
tl.to(".dot", {x:"+=150", ease:"power1.inOut", 
	stagger:{
		each:0.03,
		from:"end"
	}
})

function checkDistance() {
	if(gsap.getProperty(".dot:nth-of-type(1)", "x") > window.innerWidth){
		gsap.set("body", {background:"skyblue"})
		tl.pause()
	}
}

tl.to(".dot", {y:-60, ease:"sine.inOut", duration:0.25,
	stagger:{
		each:0.03,
		from:"end",
		repeat:1,
		yoyo:true
	}
}, 0)
// learn how this was made 

// https://www.creativeCodingClub.com

// Master the Art of GreenSock Animation
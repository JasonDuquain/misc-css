ScrollTrigger.create({
		trigger:".boxContainer", // not .box
		start:"top 300px",
		end:"+=300", // end after scrolling 300px beyond the 'start'..same as end:"top+=300px 300px",
		markers:true,
		pin:true,
		pinSpacing: false
})
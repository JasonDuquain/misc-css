var video = document.getElementById('video');

ScrollTrigger.create({
	trigger: video,
	start: "top 50%",
	end: "50% top",
	markers: true,
	onEnter: () => video.play(),
	onLeave: () =>  video.pause(),
	onEnterBack: () => video.play(),
	onLeaveBack: () => video.pause()
})

document.addEventListener("click", () =>  video.play())

/* START
var video = document.getElementById('video');


*/

/* COMPLETE
var video = document.getElementById('video');

ScrollTrigger.create({
	trigger:"video",
	start:"top 50%",
	end:"50% top",
	markers:true,
	onEnter:() => video.play(),
	onLeave:() => video.pause(),
	onLeaveBack:() => video.pause(),
	onEnterBack:() => video.play()
})
*/
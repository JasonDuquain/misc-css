
let mountains = document.querySelectorAll(".mountains span");

window.addEventListener('scroll', function(e) {
   

	 mountains.forEach(mountain => {
		  
	 })
  
});

/* COMPLETE


let mountains = document.querySelectorAll(".mountains span");

window.addEventListener('scroll', function(e) {
    let scrolled = window.pageYOffset || window.scrollY;
		//var scrolled = document.documentElement.scrollTop also works

		mountains.forEach(mountain => {
			let speed = mountain.dataset.speed;
			
			mountain.style.bottom = `-${scrolled.toFixed(0) * speed}px`; 
			//mountain.style.transform = `translateY(${scrolled.toFixed(0) * speed}px)`; also works
		})
  
});

*/


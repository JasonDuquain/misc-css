
let mountains = document.querySelectorAll(".mountains span");

window.addEventListener('scroll', function(e) {
    
  
});

/* COMPLETE


let mountains = document.querySelectorAll(".mountains span");

window.addEventListener('scroll', function(e) {
    var scrolled = window.scrollY;
		//var scrolled = document.documentElement.scrollTop also works

		mountains.forEach(mountain => {
			let speed = mountain.dataset.speed;
			
			mountain.style.bottom = `-${scrolled * speed}px`; 
			//mountain.style.transform = `translateY(${scrolled * speed}px)`; also works
		})
  
});

*/



var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	
}

function previousSlide(){
	
}

function goToSlide(n){
    
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = '&#9658;'; // play character
	
}

function playSlideshow(){
	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
	
}

pauseButton.addEventListener('click', () => {
    
});

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.addEventListener('click', () => {
    
});

previous.addEventListener('click', () => {
    
});

/*added in this verison due to pagination feature*/
(function(){
  var p = document.getElementById('pagination');

  var phtml = '';

  

})();
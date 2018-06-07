

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){ 
	goToSlide(currentSlide+1); // n value used here
}

function previousSlide(){ 
	goToSlide(currentSlide-1); // n value used here
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
	console.log(n+slides.length, slides.length, (n+slides.length)%slides.length);
	slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = '&#9658;'; // play character
	playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
	playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.addEventListener('click', () => {
    (playing) ? pauseSlideshow() : playSlideshow();
});

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.addEventListener('click', () => {
    pauseSlideshow();
	nextSlide();
});

previous.addEventListener('click', () => {
    pauseSlideshow();
	previousSlide();
});


/*added in this verison due to pagination feature*/
(function(){
  var p = document.getElementById('pagination');

  var phtml = '';

  for(var i=0; i<slides.length; i++){
    phtml+=`<button>${i + 1}</button>`;
  }

  p.innerHTML = phtml;

  var pbuttons = p.querySelectorAll('button');
    
  for(var i=0; i<pbuttons.length; i++){
    pbuttons[i].onclick = (function(n){
      return function(){
        pauseSlideshow();
        goToSlide(n);
      };
    })(i);
  }

})();
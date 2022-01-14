var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;

function rotateCarousel() {
  
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  
});

var cellsRange = document.querySelector('.cells-range');
cellsRange.addEventListener( 'change', changeCarousel );
cellsRange.addEventListener( 'input', changeCarousel );

function changeCarousel() {
  

  rotateCarousel();
}

var orientationRadios = document.querySelectorAll('input[name="orientation"]');


function onOrientationChange() {
  
}

// set initials
onOrientationChange();



/* START


var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;

function rotateCarousel() {
  
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  
});

var cellsRange = document.querySelector('.cells-range');
cellsRange.addEventListener( 'change', changeCarousel );
cellsRange.addEventListener( 'input', changeCarousel );

function changeCarousel() {
  

  rotateCarousel();
}

var orientationRadios = document.querySelectorAll('input[name="orientation"]');


function onOrientationChange() {
  
}

// set initials
onOrientationChange();


*/
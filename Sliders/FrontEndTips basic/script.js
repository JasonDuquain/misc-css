/* https://www.youtube.com/watch?v=rTB-UNl_B_Y&list=PLRCvSNiMyEmxBfXuFuQ70uxHcV9itxfTZ&index=1&ab_channel=FrontendTips */

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const slider = document.querySelector('.slider');
const indicatorParents = document.querySelector('.controls ul'); 
const indicators = document.querySelectorAll('.controls li');
var sectionIndex = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    
  });
});

leftArrow.addEventListener('click', function() {

});

rightArrow.addEventListener('click', function() {
  
});

/* START

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const slider = document.querySelector('.slider');
const indicatorParents = document.querySelector('.controls ul'); 
const indicators = document.querySelectorAll('.controls li');
var sectionIndex = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    
  });
});

leftArrow.addEventListener('click', function() {

});

rightArrow.addEventListener('click', function() {
  
});

*/

/* COMPLETE

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const slider = document.querySelector('.slider');
const indicatorParents = document.querySelector('.controls ul'); 
const indicators = document.querySelectorAll('.controls li');
var sectionIndex = 0;

function setIndex() {
  if (document.querySelector('.controls .selected').length > 0) {
    document.querySelector('.controls .selected').classList.remove('selected');
  }
  slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
}

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    sectionIndex = i;
    setIndex();
    indicator.classList.add('selected');
  });
});

leftArrow.addEventListener('click', function() {
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  indicatorParents.children[sectionIndex].classList.add("selected");
  setIndex()
});

rightArrow.addEventListener('click', function() {
  sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
  indicatorParents.children[sectionIndex].classList.add("selected");
  setIndex();
});

*/
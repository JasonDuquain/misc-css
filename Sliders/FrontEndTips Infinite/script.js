/* https://www.youtube.com/watch?v=0YMntQg-WIk&list=PLRCvSNiMyEmxBfXuFuQ70uxHcV9itxfTZ&index=2&ab_channel=FrontendTips */

const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

prev.addEventListener('click', function() {
  if (direction === -1) {
    slider.append(slider.firstElementChild);
    direction = 1;
  }
  carousel.style.justifyContent = 'flex-end';
  slider.style.transform = 'translate(20%)'; 
});

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-20%)';
});


slider.addEventListener('transitionend', function() {
  console.log(direction); /* will be -1 any time right arrow is clicked and 1 any time left arrow is clicked...unless you start clicking the left arrow then it will be undefined..so no # is assigned until you click right arrow */

  if (direction === -1) {
    slider.append(slider.firstElementChild);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.5s';
  })
});



/* START

const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

prev.addEventListener('click', function() {
   
});

next.addEventListener('click', function() {
  
});

slider.addEventListener('transitionend', function() {
  
});

*/

/* COMPLETE

const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

prev.addEventListener('click', function() {
  if (direction === -1) {
    slider.append(slider.firstElementChild);
    direction = 1;
  }
  carousel.style.justifyContent = 'flex-end';
  slider.style.transform = 'translate(20%)'; 
});

next.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-20%)';
});

slider.addEventListener('transitionend', function() {
  if (direction === -1) {
    slider.append(slider.firstElementChild);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.5s';
  })
});

*/
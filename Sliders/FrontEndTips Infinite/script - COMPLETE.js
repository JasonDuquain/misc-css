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


const parallaxOne = document.querySelector('.parallax--one');
const parallaxTwo = document.querySelector('.parallax--two');

window.addEventListener('scroll', () => {
   const scrollTop = window.scrollY;
   parallaxOne.style.backgroundPosition = `center -${scrollTop * .1}px`;
   parallaxTwo.style.backgroundPosition = `center -${scrollTop * .1}px`;
});
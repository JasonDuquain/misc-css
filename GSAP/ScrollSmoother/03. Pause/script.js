gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 2,
  effects: true,
});

// Toggle a modal open and closed
let button = document.querySelector('.button')
let modal = document.querySelector('.modal')
let isOpen

button.addEventListener('click', (e) => {
  isOpen = !isOpen
  gsap.to(modal, {
    autoAlpha: isOpen ? 1 : 0,
  })
  
  smoother.paused(isOpen)
})
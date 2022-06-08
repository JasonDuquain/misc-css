gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  effects: true
});


document.querySelector(".button").addEventListener("click", e => {
  
  
});

let modalButton = document.querySelector('.modalButton')
let modal = document.querySelector('.modal')
let isOpen

modalButton.addEventListener('click', (e) => {
  
})


/* COMPLETE

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,   // seconds it takes to "catch up" to native scroll position
  effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});

// PIN box-c when it reaches the center of the viewport, for 300px
ScrollTrigger.create({
  trigger: ".box-c",
  pin: true,
  start: "center center",
  end: "+=300"
});

document.querySelector("button").addEventListener("click", e => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  smoother.scrollTo(".box-c", true, "center center");
  
  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  // 	scrollTop: smoother.offset(".box-c", "center center"),
  // 	duration: 1
  // });
});

let modalButton = document.querySelector('.modalButton')
let modal = document.querySelector('.modal')
let isOpen

modalButton.addEventListener('click', (e) => {
  console.log(0)
  isOpen = !isOpen
  gsap.to(modal, {
    autoAlpha: isOpen ? 1 : 0,
  })
  
  smoother.paused(isOpen)
})


*/

gsap.registerPlugin(Flip);

const box = document.querySelector(".box");
const originalContainer = document.querySelector(".originalContainer");
const newContainer = document.querySelector(".newContainer");

document.querySelector("button").addEventListener('click', () => {
  
  
});

/* COMPLETE

gsap.registerPlugin(Flip);

const box = document.querySelector(".box");
const originalContainer = document.querySelector(".originalContainer");
const newContainer = document.querySelector(".newContainer");

document.querySelector("button").addEventListener('click', () => {
  const state = Flip.getState(box);
  
  (box.parentNode === originalContainer ? newContainer : originalContainer).append(box);
  
  Flip.from(state, {duration: 1, ease: "power1.inOut", scale: true});
});

*/
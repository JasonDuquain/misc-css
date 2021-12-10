/*

The principle is 
1) loop through all the images
2) for each one add a 'click' event listener
---
1) when clicked, get the current state of the image
2) make a state change by toggling a class
3) animate to the new state

*/

gsap.registerPlugin(Flip);

const thumbnails = gsap.utils.toArray(".thumbnail");

thumbnails.forEach((thumbnail) => {
  
});

/* COMPLETE

gsap.registerPlugin(Flip);

const thumbnails = gsap.utils.toArray(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    const state = Flip.getState(e.target);

    e.target.classList.toggle("full-size");

    Flip.from(state, {
      duration: 0.5,
      ease: "power1.inOut",
      zIndex: 999,
      absolute: true,
      toggleClass: 'isFlipping'
    });
  });
});

*/
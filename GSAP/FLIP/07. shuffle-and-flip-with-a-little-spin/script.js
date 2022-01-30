"use strict";
gsap.registerPlugin(Flip);

const container1 = document.querySelector(".container1"); 
const container2 = document.querySelector(".container2"); 
const boxes = gsap.utils.toArray(".orange, .purple");

document.querySelector("button").addEventListener("click", () => {
  
});

/* COMPLETE

"use strict";
gsap.registerPlugin(Flip);

const container1 = document.querySelector(".container1"); 
const container2 = document.querySelector(".container2"); 
const boxes = gsap.utils.toArray(".orange, .purple");

document.querySelector("button").addEventListener("click", () => {
    const state = Flip.getState(".orange, .purple"); 

    const newContainer = boxes[0].parentNode === container1 ? container2 : container1;

    gsap.utils.shuffle(boxes).forEach(box => newContainer.append(box));
    
    Flip.from(state, {
        duration: 1,
        ease: "power1.inOut",
        stagger: .3,
        spin: (index, target) => {
            if (target.classList.contains("clockwise")) {
              return 1;
            } else if (target.classList.contains("counterclockwise")) {
              return -1;
            } else {
              return 0;
            }
          }
    });
});

*/
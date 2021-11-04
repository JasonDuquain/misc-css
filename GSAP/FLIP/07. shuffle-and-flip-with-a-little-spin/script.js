"use strict";
gsap.registerPlugin(Flip);
let container1 = document.querySelector(".container1"), container2 = document.querySelector(".container2"), boxes = gsap.utils.toArray(".orange, .purple");
document.querySelector("button").addEventListener("click", () => {
    const state = Flip.getState(".orange, .purple"); // selector text, an Element, NodeList or Array
    // shuffle & swap containers
    const newContainer = boxes[0].parentNode === container1 ? container2 : container1;
    gsap.utils.shuffle(boxes).forEach(box => newContainer.appendChild(box));
    Flip.from(state, {
        duration: 1,
        // Optional properties related to HOW it's transitioned
        ease: "power1.inOut",
        stagger: 0.2,
        spin: true
    });
});
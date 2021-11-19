gsap.registerPlugin(Flip);

const group = document.querySelector(".group");

document.querySelector(".button").addEventListener("click", () => {
  const state = Flip.getState(".group, .box");

  group.classList.toggle("reorder");

  let tweeny = Flip.from(state, {
    absolute: true, // uses position: absolute during the flip to work around flexbox challenges
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.inOut"
  });


});
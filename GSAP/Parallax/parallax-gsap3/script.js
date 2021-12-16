gsap.to(".parallax-bg", {
  scrollTrigger: {
    scrub: true
  }, 
  y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "none"
});
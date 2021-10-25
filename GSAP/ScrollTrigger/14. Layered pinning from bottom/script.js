gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});

//give each panel a descending Zindex
gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});


/* COMPLETE

gsap.registerPlugin(ScrollTrigger);

gsap.to(".panel:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});

//give each panel a descending Zindex
gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});

*/


/* START

gsap.registerPlugin(ScrollTrigger);

*/

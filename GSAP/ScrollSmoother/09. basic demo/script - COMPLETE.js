gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smoother-wrapper",
  content: "#smoother-content",
  smooth: 1.5,
  effects: true
});

gsap.set(".header__inner, .scroll-down", { opacity: 1 });

let paths = gsap.utils.toArray(
  "#logo-scroll path, #logo-smoother path, #logo-mouse"
);

paths.forEach((path, i) => {
  smoother.effects(path, { lag: i * 0.08, speed: 1 });
});

let finalTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".final__svg",
    start: "top bottom",
    scrub: true,
    end: "bottom top"
  }
});

finalTl
  .to(".final #cross > g", {
    rotate: 360,
    transformOrigin: "center center",
    stagger: 0.1
  }, 0)
  .from(".final .circle", {
    scale: 0,
    opacity: 0,
    rotate: 20,
    y: (i) => (i == 0 ? 200 : -150),
    ease: "sine.out",
    transformOrigin: "center center",
    stagger: 0.1
  }, 0);
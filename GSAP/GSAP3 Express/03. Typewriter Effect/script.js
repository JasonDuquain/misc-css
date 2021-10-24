gsap.registerPlugin(TextPlugin);

gsap.to("p", {
  text: "typewriter effect yes indeed",
  delimiter: " ",
  duration: 3,
  ease: "power1.in",
  yoyo: true,
  repeat: 1,
  repeatDelay: 2
})
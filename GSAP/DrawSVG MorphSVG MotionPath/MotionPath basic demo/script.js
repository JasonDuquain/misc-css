
gsap.registerPlugin(MotionPathPlugin);

//gsap.set("#rect", { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" })

gsap.to("#rect", {
  duration: 5, 
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5]
  }
});

// MotionPathHelper.create("#rect")
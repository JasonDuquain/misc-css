gsap.registerPlugin(MotionPathPlugin);

gsap.set("#target", {
  yPercent: -50,
  xPercent: -50,
  transformOrigin: "50% 50%"
});


/* COMPLETE

gsap.registerPlugin(MotionPathPlugin);

gsap.set("#target", {
  yPercent: -50,
  xPercent: -50,
  transformOrigin: "50% 50%"
});
gsap.set("#path2", { drawSVG: 0 });

const tl = gsap.timeline();
tl.to("#target", { duration: 3, motionPath: { path: "#path1" } });
tl.to("#target", { duration: 2, x: 160.52, y: 479.74 });
tl.add("label");
tl.to("#path2", { duration: 3, drawSVG: true }, "label");
tl.to("#target", { duration: 3, motionPath: { path: "#path2" } }, "label");
tl.to("#target", { duration: 2, x: 169.52, y: 107 }, "end");
tl.to("#path2", { duration: 1, autoAlpha: 0 }, "end+=1");

*/
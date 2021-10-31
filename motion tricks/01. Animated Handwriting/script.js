/* https://www.motiontricks.com/animated-handwriting-effect-part-1/ */

gsap.set("#demo", { autoAlpha: 1 });
gsap.set("path", { drawSVG: 0, stroke: "#42a6e0" });
gsap.set("ellipse", { autoAlpha: 0, fill: "#42a6e0" });

const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
  

  
/* COMPLETE

gsap.set("#demo", { autoAlpha: 1 });
gsap.set("path", { drawSVG: 0, stroke: "#42a6e0" });
gsap.set("ellipse", { autoAlpha: 0, fill: "#42a6e0" });

const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
  .to("#hPipe", { duration: 0.35, drawSVG: true })
  .to("#hBody", { duration: 0.75, drawSVG: true })
  .to("#mainPath", { duration: 5, drawSVG: true })
  .to("#dot2", { duration: 0.15, autoAlpha: 1 })
  .to("#dot1", { duration: 0.15, autoAlpha: 1 })
  .to("#tCross", { duration: 0.25, drawSVG: true })
  .to("path, ellipse", { duration: 0.75, autoAlpha: 0 }, "+=1");

*/
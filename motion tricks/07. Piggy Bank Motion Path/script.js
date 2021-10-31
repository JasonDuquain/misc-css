/* https://www.motiontricks.com/piggy-bank-motion-path-basics/ */

gsap.registerPlugin(MotionPathPlugin);

let motionPaths = gsap.utils.toArray("#motionPaths path");
let targets = gsap.utils.toArray("#money g");

gsap.set(targets, {xPercent:-50, yPercent:-50, transformOrigin: "center center"});

targets.forEach((obj, i) => {
  
});

/* COMPLETE

gsap.registerPlugin(MotionPathPlugin);

let motionPaths = gsap.utils.toArray("#motionPaths path"); // the 3 money paths
let targets = gsap.utils.toArray("#money g"); // the 3 bills

gsap.set(targets, {xPercent:-50, yPercent:-50, transformOrigin: "center center"});

targets.forEach((obj, i) => {
  let dur = gsap.utils.random(6,8);
  let delay = gsap.utils.random(0,1);
  let tl = gsap.timeline({
    defaults: { ease: "sine.in" },
    repeat: -1,
    delay: delay
  });
  tl.from(obj, { duration: dur / 2, scale: 0 })
  tl.to(obj, {
    duration: dur,
    motionPath: {
      path: motionPaths[i],
      align: motionPaths[i],
      alignOrigin: [0.5, 0.5],
      autoRotate: 90
    }
  }, 0)
});

*/


/* START

gsap.registerPlugin(MotionPathPlugin);

let motionPaths = gsap.utils.toArray("#motionPaths path");
let targets = gsap.utils.toArray("#money g");

gsap.set(targets, {xPercent:-50, yPercent:-50, transformOrigin: "center center"});

targets.forEach((obj, i) => {
  
});

*/
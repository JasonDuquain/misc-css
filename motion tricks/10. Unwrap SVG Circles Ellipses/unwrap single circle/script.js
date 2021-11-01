gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);

const dur = 1.25;
const mainEase = "sine.inOut";
const master = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
const svgns = "http://www.w3.org/2000/svg";
const demo = document.querySelector("svg");
const strokeWidth = 4;
const strokeColor = "#5cceee";

function unwrap(target1, target2) {
  

}


master.add(unwrap("#left", "#right"), 0);


/* START

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);

const dur = 1.25;
const mainEase = "sine.inOut";
const master = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
const svgns = "http://www.w3.org/2000/svg";
const demo = document.querySelector("svg");
const strokeWidth = 4;
const strokeColor = "#5cceee";

function unwrap(target1, target2) {
  

  return tl;
}


master.add(unwrap("#left", "#right"), 0);

*/
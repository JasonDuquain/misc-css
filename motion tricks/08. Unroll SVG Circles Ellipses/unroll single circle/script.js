/* https://www.motiontricks.com/unroll-svg-circles-ellipses-and-spirals/ */

const dur = 1.25;
const mainEase = "sine.inOut";
const master = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
const svgns = "http://www.w3.org/2000/svg";
const demo = document.querySelector("svg");
const strokeWidth = 4;
const strokeColor = "#5cceee";
let paths = gsap.utils.toArray("path");

function unroll(target) {
  
}

paths.forEach((obj, i) => {
  
});

/* COMPLETE 

const dur = 1.25;
const mainEase = "sine.inOut";
const master = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
const svgns = "http://www.w3.org/2000/svg";
const demo = document.querySelector("svg");
const strokeWidth = 4;
const strokeColor = "#5cceee";
let paths = gsap.utils.toArray("path");

function unroll(target) {
  let start = MotionPathPlugin.getRawPath(target)[0];
  let xPos = start[0];
  let yPos = start[1];

  let length = DrawSVGPlugin.getLength(target); // -or- target.getTotalLength();
  let lineTarget = document.createElementNS(svgns, "line");
  demo.appendChild(lineTarget);
  gsap.set([lineTarget, target], {
    stroke: strokeColor,
    strokeWidth: strokeWidth
  });

  let tl = gsap.timeline({
    defaults: { duration: dur, ease: mainEase }
  });
  tl.set(lineTarget, {
    attr: { x1: xPos, x2: xPos, y1: yPos, y2: yPos }
  })
  tl.to(target, { drawSVG: 0, x: length }, 0);
  tl.to(lineTarget, { attr: { x2: "+=" + length } }, 0);

  return tl
}

paths.forEach((obj, i) => {
  master.add(unroll(obj));
});

*/

/* START

const dur = 1.25;
const mainEase = "sine.inOut";
const master = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
const svgns = "http://www.w3.org/2000/svg";
const demo = document.querySelector("svg");
const strokeWidth = 4;
const strokeColor = "#5cceee";
let paths = gsap.utils.toArray("path");

function unroll(target) {
  
}

paths.forEach((obj, i) => {
  
});


*/
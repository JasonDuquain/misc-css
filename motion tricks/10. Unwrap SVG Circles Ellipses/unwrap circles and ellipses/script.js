console.clear();
const dur = 1.25;
const mainEase = "sine.inOut";
const master = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
const svgns = "http://www.w3.org/2000/svg";
const demo = document.querySelector("svg");
const strokeWidth = 6;
const strokeColor = "#5cceee";

function unwrap(target1, target2) {
  let start = MotionPathPlugin.getRawPath(target1)[0];
  let xPos = start[0];
  let yPos = start[1]
  let length = DrawSVGPlugin.getLength(target1);
  let lineTarget = document.createElementNS(svgns, "line");
  demo.appendChild(lineTarget);
  gsap.set([lineTarget, target1, target2], {
    stroke: strokeColor,
    strokeWidth: strokeWidth
  });

  let tl = gsap.timeline({
    defaults: { duration: dur, ease: mainEase }
  });
  tl.set(lineTarget, {
    attr: { x1: xPos, x2: xPos, y1: yPos, y2: yPos }
  });

  tl.to(target2, { drawSVG: 0, x: length }, 0);
  tl.to(target1, { drawSVG: 0, x: -length }, 0);
  tl.to(lineTarget, { attr: { x1: "-=" + length, x2: "+=" + length } }, 0);

  return tl;
}


master.add(unwrap("#circleLeft", "#circleRight"), 0);
master.add(unwrap("#ovalLeft", "#ovalRight"), 0);
master.add(unwrap("#eggLeft", "#eggRight"), 0);
console.clear();
let dur = 1.25;
let mainEase = "none";
let master = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
const svgns = "http://www.w3.org/2000/svg";
let demo = document.querySelector("svg");
const strokeWidth = 4;
const strokeColor = "#5cceee";

function unfold(target, sides) {
  let degrees = 360 / sides;
  let segment = DrawSVGPlugin.getLength(target) / sides;
  let start = MotionPathPlugin.getRawPath(target)[0];
  let xPos = start[0];
  let yPos = start[1]
  let lineTarget = document.createElementNS(svgns, "line");
  demo.appendChild(lineTarget);
  gsap.set([lineTarget, target], {
    stroke: strokeColor,
    strokeWidth: strokeWidth
  });
  let tl = gsap.timeline({
    defaults: { duration: dur / (sides - 1), ease: mainEase }
  });
  tl.set(target, { drawSVG: segment * (sides - 1) });
  tl.set(lineTarget, {
    attr: { x1: xPos, x2: segment + xPos, y1: yPos, y2: yPos }
  });

  for (let i = sides - 1; i > 0; i--) {
    xPos += segment;
    tl.to(target, { rotation: "+=" + degrees, svgOrigin: xPos + " " + yPos });
    tl.set(target, { drawSVG: segment * (i - 1) });
    tl.set(lineTarget, { attr: { x2: "+=" + segment } });
  }

  return tl;
}

master.add(unfold("#one", 8));
master.add(unfold("#two", 3), 0);
master.add(unfold("#three", 6), 0);
master.add(unfold("#four", 4), 0);
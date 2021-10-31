/* https://www.motiontricks.com/creating-dynamic-svg-elements-with-javascript/ */

const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";



/* COMPLETE


const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";

let width = 80;
let height = 60;
let columns = 4;
let rows = 3;
let counter = 0;
const colorArray = ["#94c356", "#46a4cc", "#a63e4b"];
const fakePadding = 10;

const svgWidth = width * columns + (columns + 1) * fakePadding;
const svgHeight = height * rows + (rows + 1) * fakePadding;

gsap.set(svg, {
  attr: {
    width: svgWidth,
    height: svgHeight,
    viewBox: "0 0 " + svgWidth + " " + svgHeight
  }
});

for (let j = 0; j < rows; j++) {
  for (let i = 0; i < columns; i++) {
    counter++;
    let newRect = document.createElementNS(svgns, "rect");
    let newX = (width + fakePadding) * i + fakePadding;
    let newY = (height + fakePadding) * j + fakePadding;
    gsap.set(newRect, {
      attr: {
        x: newX,
        y: newY,
        width: width,
        height: height,
        fill: colorArray[counter % colorArray.length]
      }
    });
    targets.appendChild(newRect);
    let txt = document.createElementNS(svgns, "text");
    txt.textContent = counter;
    svg.append(txt);
    gsap.set(txt, {
      x: newX + width/2,
      y: newY + height/2
    })
  }
}

gsap
.timeline({ delay: 1 })
.from("#targets rect", {
  duration: 0.75,
  attr: { x: 0, y: 0 },
  opacity: 0,
  stagger: { amount: 0.75, from: "random" },
  ease: "sine.inOut"
})
.from("text", {
  duration: 0.35,
  opacity: 0,
  ease: "none"
});

*/

/* START - keep these 2 in place for each demo in the article:

const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";

*/
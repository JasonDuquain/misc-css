/* https://www.motiontricks.com/creating-dynamic-svg-elements-with-javascript/ */

const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";
// const targets = document.querySelector("#targets");

/* COMPLETE

const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";
const targets = document.querySelector("#targets");

let width = 80;
let height = 60;
let columns = 4;
let rows = 5;
let counter = 0;
const colorArray = ["#94c356", "#46a4cc", "#a63e4b"];

const svgWidth = width * columns;
const svgHeight = height * rows;

gsap.set(svg, {
  attr: {
    width: svgWidth,
    height: svgHeight,
    viewBox: "0 0 " + svgWidth + " " + svgHeight
  }
})

for (let j = 0; j < rows; j++) {
  for (let i = 0; i < columns; i++) {
    counter++;
    let newRect = document.createElementNS(svgns, "rect");
    gsap.set(newRect, {
      attr: {
        x: i * width,
        y: j * height,
        width: width,
        height: height,
        fill: colorArray[counter % colorArray.length]
      }
    });
    targets.appendChild(newRect);
    let txt = document.createElementNS(svgns, "text");
    txt.textContent = counter;
    svg.appendChild(txt);
    gsap.set(txt, {
        x: i * width + width / 2,
        y: j * height + height / 2
    });
    
  }
}

gsap.timeline({ delay: 1 })
.from("#targets rect", {
  duration: 0.75,
  attr: { x: 0, y: 0 },
  opacity: 0,
  stagger: { amount: 1, from: "random" },
  ease: "sine1.inOut"
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
// const targets = document.querySelector("#targets");

*/
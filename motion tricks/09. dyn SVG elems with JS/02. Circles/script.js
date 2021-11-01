const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";
const targets = document.querySelector("#targets");


// 820... 6 * 20 = 120... 50 * 2 = 100... 100 * 7 = 700... 700 + 120 = 820
const svgWidth = radius * 2 * circles + (circles - 1) * spacing;


/* COMPLETE

const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";
const targets = document.querySelector("#targets");

const circles = 7;
const radius = 50;
const spacing = 20; // this will be the space between circles
const colorArray = ["#829FD9", "#BABF2A", "#735702", "#027368"];
let counter = 0;

// 820... 6 * 20 = 120... 50 * 2 = 100... 100 * 7 = 700... 700 + 120 = 820
const svgWidth = radius * 2 * circles + (circles - 1) * spacing;
const svgHeight = radius * 2;

gsap.set(svg, {
  attr: {
    width: svgWidth,
    height: svgHeight,
    viewBox: "0 0 " + svgWidth + " " + svgHeight
  }
});

for (let i = 0; i < circles; i++) {
  counter++;
  let newCirc = document.createElementNS(svgns, "circle");
  let newX = (radius * 2 + spacing) * i + radius;
  console.log(newX);
  gsap.set(newCirc, {
    attr: {
      cy: radius,
      cx: newX,
      r: radius,
      fill: colorArray[counter % colorArray.length]
     
    },
    
  });
  targets.appendChild(newCirc);
  let txt = document.createElementNS(svgns, "text");
  txt.textContent = counter;
  svg.appendChild(txt);
  gsap.set(txt, {
    attr: {
      x: newX,
      y: radius
    }
  });
}

*/

/* START

const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";
const targets = document.querySelector("#targets");


// 820... 6 * 20 = 120... 50 * 2 = 100... 100 * 7 = 700... 700 + 120 = 820
const svgWidth = radius * 2 * circles + (circles - 1) * spacing;

*/
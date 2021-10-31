const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";

// change any value
let positions = 20; // how many numbers
let count = 0; // simple counter for the numbers
let startX = 30; // first line position and fist number position
let y2Pos = 100; // bottom of each tick line
let y1Pos;
let spacing = 9.4; // space between lines

for (let j = 0; j < positions; j++) {
  
  for (let i = 0; i < 5; i++) {
    
  }
  
}

function makeLine(yp) {
  let newLine = document.createElementNS(svgns, "line");
  svg.appendChild(newLine);
  
}

function makeNumber() {
  let txt = document.createElementNS(svgns, "text");
  svg.appendChild(txt);
  
}

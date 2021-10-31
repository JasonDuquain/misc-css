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

/* COMPLETE

const svg = document.querySelector("svg");
const svgns = "http://www.w3.org/2000/svg";

// change any value
let positions = 20; // how many numbers
let count = 0; // simple counter for the numbers
let startX = 30; // first line position and fist number position
let y2Pos = 100; // bottom of each tick line
let y1Pos;
let spacing = 9.4; // space between lines

// make a 5 pack of lines for each number
for (let j = 0; j < positions; j++) {
  makeNumber();

  console.log(startX); // starts at 30 and increments by 47

  for (let i = 0; i < 5; i++) {
    y1Pos = i === 0 ? y2Pos - 25 : y2Pos - 15;
    makeLine(y1Pos); // 75 85 85 85 85 75 85 85 85 85 ...
    startX += spacing;
  }
  count++;
}

makeNumber(); // need one final number 
makeLine(y2Pos - 25); //  need 1 extra line for the last number

function makeLine(yp) {
  //console.log(yp); // 75 85 85 85 85 75 85 85 85 85 ...
  
  let newLine = document.createElementNS(svgns, "line");
  svg.appendChild(newLine);
  gsap.set(newLine, {
    attr: { x1: startX, x2: startX, y1: yp, y2: y2Pos }
  })
}

function makeNumber() {
  let txt = document.createElementNS(svgns, "text");
  svg.appendChild(txt);
  txt.textContent = count;
  gsap.set(txt, {
    attr: { x: startX, y: y2Pos - 40 }
  })
}

*/

/* START

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

*/
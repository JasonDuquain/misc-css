/* remove wrapper div at beginning of lesson1 */

let splitLines;
let splitLinesTrigger;

function init() {
  
}

function killAll() {
  
}

function debounce(func) {
  var timer;
}

window.addEventListener("resize", debounce(function(e) {
  console.log('resize');
  
}))

window.addEventListener('load', (event) => {
   init();
});


/* START

let splitLines;
let splitLinesTrigger;

function init() {
  
}

function killAll() {
  
}

function debounce(func) {
  var timer;
}

window.addEventListener("resize", debounce(function(e) {
  console.log('resize');
  
}))

window.addEventListener('load', (event) => {
   init();
});

*/


/* COMPLETE - part 2 

let splitLines
let splitLinesTrigger

function init() {
  splitLines = new SplitText(".toSplit", {type: "lines", linesClass:"line"});
  splitLinesTrigger = new SplitText(".toSplit", {type: "lines", linesClass:"lineTrigger"});
  splitLines.lines.forEach((line, index) =>{
    ScrollTrigger.create({
      trigger:splitLinesTrigger.lines[index],
      //markers:true, 
      start:"top 95%",
      animation:gsap.from(line, {duration:1, y:200, opacity:0}),
      toggleActions:"restart none none reverse"   
    })                            
  })
}

function killAll() {
  splitLines.revert();
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  init();
}

function debounce(func) {
  var timer;
  return function(event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 300, event);
  }
}

window.addEventListener("resize", debounce(function(e) {
  console.log('resize');
  killAll();
}))

window.addEventListener('load', (event) => {
   init();
});

*/
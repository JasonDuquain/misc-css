/* https://www.youtube.com/watch?v=6UAoyBcn2fk */
/* may need to disable the visibility: hidden; from #path if the button click animations are not working */

gsap.registerPlugin(DrawSVGPlugin);

// BUTTON CLICK ANIMATIONS


let values = "100%;40% 60%;20 350;50% 50%;true;10%;0% 30%".split(";");
let currentIndex = 0;

gsap.set("#path, #code", {visibility:"visible"});

document.querySelector("#next").addEventListener("click", next);

function next() {
  gsap.killTweensOf(next);
  if (++currentIndex === values.length) {
    currentIndex = 0;
  }
  if (values[currentIndex] === 'true') {
    gsap.set('#current', { text: (values[currentIndex]) })
  } else {
    gsap.set('#current', { text: `"${(values[currentIndex])}"` })
  }
  gsap.to("#path", {drawSVG:values[currentIndex], duration: 1, ease:"power1.inOut"});
}
document.querySelector("#next").addEventListener("click", next);


/* COMPLETE

let values = "100%;40% 60%;20 350;50% 50%;true;10%;0% 30%".split(";");
let currentIndex = 0;

gsap.set("#path, #code", {visibility:"visible"});

document.querySelector("#next").addEventListener("click", next);

function next() {
  gsap.killTweensOf(next);
  if (++currentIndex === values.length) {
    currentIndex = 0;
  }
  if (values[currentIndex] === 'true') {
    gsap.set('#current', { text: (values[currentIndex]) })
  } else {
    gsap.set('#current', { text: `"${(values[currentIndex])}"` })
  }
  gsap.to("#path", {drawSVG:values[currentIndex], duration: 1, ease:"power1.inOut"});
}
document.querySelector("#next").addEventListener("click", next);

*/
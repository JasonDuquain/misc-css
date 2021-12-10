const sectionColors = ["dodgerblue", "salmon", "green",   "purple",    "maroon"]
const navColors =     ["#00BFFF",    "#FFA07A", "#90EE90", "#EE82EE", "#FF6347"]

gsap.set(".fullscreen", { backgroundColor: gsap.utils.wrap(sectionColors) })

const sections = document.querySelectorAll(".fullscreen");
let navHeight;

sections.forEach(function(section, index) {
  
  
})

ScrollTrigger.addEventListener("refreshInit", function() {
  
});

/* COMPLETE

const sectionColors = ["dodgerblue", "salmon", "green",   "purple",    "maroon"]
const navColors =     ["#00BFFF",    "#FFA07A", "#90EE90", "#EE82EE", "#FF6347"]

gsap.set(".fullscreen", {backgroundColor:gsap.utils.wrap(sectionColors)})

const sections = document.querySelectorAll(".fullscreen");
let navHeight;

sections.forEach(function(section, index) {
  console.log(section, navColors[index])
  ScrollTrigger.create({
    trigger: section,
    start: () => "top " + navHeight,
    end: () => "bottom " + navHeight,
    markers: true,
    animation: gsap.to(".nav", { 
      backgroundColor: navColors[index],
      immediateRender: false 
    }),
    toggleActions: "restart none none reverse"
  })
})

ScrollTrigger.addEventListener("refreshInit", function() {
  navHeight = document.querySelector(".nav").offsetHeight;
});

*/


/* START 

const sectionColors = ["dodgerblue", "salmon", "green",   "purple",    "maroon"]
const navColors =     ["#00BFFF",    "#FFA07A", "#90EE90", "#EE82EE", "#FF6347"]

gsap.set(".fullscreen", { backgroundColor: gsap.utils.wrap(sectionColors) })

const sections = document.querySelectorAll(".fullscreen");
let navHeight;

sections.forEach(function(section, index) {
  
  
})

ScrollTrigger.addEventListener("refreshInit", function() {
  
});

*/
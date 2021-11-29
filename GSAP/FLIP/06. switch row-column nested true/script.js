gsap.registerPlugin(Flip);

const outerContainer = document.querySelector("#outer-container");
const containers = gsap.utils.toArray(".flex-container");
const movingContent = gsap.utils.toArray(".inner-container, .inner-container p");

function switchLayout(newLayout) {
  

};

document.getElementById("column-btn").addEventListener("click", () => switchLayout("column"));
document.getElementById("row-btn").addEventListener("click", () => switchLayout("row"));

/* COMPLETE

gsap.registerPlugin(Flip);

const outerContainer = document.querySelector("#outer-container");
const containers = gsap.utils.toArray(".flex-container");
const movingContent = gsap.utils.toArray(".inner-container, .inner-container p");

function switchLayout(newLayout) {
  const state = Flip.getState(movingContent);
  
  newLayout === "column" ? outerContainer.classList.add("column") : outerContainer.classList.remove("column");
  
  containers.forEach(container => container.classList.toggle("reverse"));
  
  Flip.from(state, { 
    absolute: true,
    nested: true,
    duration: 1,
    ease: "power1.inOut"
  });
  
};

document.getElementById("column-btn").addEventListener("click", () => switchLayout("column"));
document.getElementById("row-btn").addEventListener("click", () => switchLayout("row"));

*/

/* START

gsap.registerPlugin(Flip);

const outerContainer = document.querySelector("#outer-container");
const containers = gsap.utils.toArray(".flex-container");
const movingContent = gsap.utils.toArray(".inner-container, .inner-container p");

function switchLayout(newLayout) {
  
};

document.getElementById("column-btn").addEventListener("click", () => switchLayout("column"));
document.getElementById("row-btn").addEventListener("click", () => switchLayout("row"));

*/
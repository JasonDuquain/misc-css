gsap.registerPlugin(Flip);

const outerContainer = document.querySelector("#outer-container"),
      containers = gsap.utils.toArray(".flex-container"),
      movingContent = gsap.utils.toArray(".inner-container, .inner-container p");

function switchLayout(newLayout) {
  const state = Flip.getState(movingContent);
  
  newLayout === "column" ? outerContainer.classList.add("column") : outerContainer.classList.remove("column");
  
  containers.forEach(container => container.classList.toggle("reverse"));
  
  Flip.from(state, { 
    absolute: true, // flips to position: absolute during the animation to work around flexbox challenges
    nested: true,
    duration: 1,
    ease: "power1.inOut"
  });
  
};

document.getElementById("column-btn").addEventListener("click", () => switchLayout("column"));
document.getElementById("row-btn").addEventListener("click", () => switchLayout("row"));
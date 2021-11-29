const imageHeight = Math.round(innerWidth * 3 / 2);
let heightDiff, midY, lastImg;

// Create an image to be used for the zoomed image view
let imageOverlay = document.createElement("img");
imageOverlay.classList.add("zoomedImage");
document.body.appendChild(imageOverlay);

// Handle the grid clicks
gsap.utils.toArray('article').forEach(article => {
  const img = article.querySelector("img");
  

  article.addEventListener('click', () => {
    imageOverlay.addEventListener('load', function() {
      
    }, { once: true });
    
  });
});

// Update our variables on resize
function handleResize() {
  heightDiff = (imageHeight - innerHeight) / 2;
  midY = innerHeight / 2;
}
window.addEventListener("resize", handleResize);
handleResize();

// The unzoom functionality
function addUnzoom() {
  imageOverlay.addEventListener("click", () => {
    
    
  }, { once: true });
}
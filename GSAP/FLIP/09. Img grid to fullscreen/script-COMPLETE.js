const imageHeight = Math.round(innerWidth * 3 / 2);
let heightDiff, midY, lastImg;

// Create an image to be used for the zoomed image view
let imageOverlay = document.createElement("img");
imageOverlay.className = "zoomedImage";
document.body.appendChild(imageOverlay);

// Handle the grid clicks
gsap.utils.toArray('article').forEach(article => {
  const img = article.querySelector("img");
  // the match returns an arr with the exact match and any capturing grp(s). So for the 1st img it returns: ["https://picsum.photos/id/237", "237"]
  const newSRC = img.src.match(/https:\/\/picsum.photos\/id\/([0-9]+)/)[0] + `/${innerWidth}/${imageHeight}`;

  article.addEventListener('click', () => {
    imageOverlay.addEventListener('load', function() {
      lastImg = img;
      
      gsap.set(imageOverlay, { clearProps: true });
      gsap.set(imageOverlay, {
        display: 'block',
        yPercent: -50
      });
      
      const state = Flip.getState(imageOverlay);
      
      Flip.fit(imageOverlay, lastImg, {scale: true});
      
      Flip.to(state, {
        scale: true,
        duration: 1
      });
      
      // Setup unzoom
      addUnzoom();
    }, { once: true });
	
    imageOverlay.src = newSRC; // this is the 1st thing that happens in the click handler and it will cause the load evt above to fire
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
    
    const state = Flip.getState(imageOverlay);
    
    Flip.fit(imageOverlay, lastImg, {scale: true});
    
    Flip.from(state, {
      scale: true,
      onComplete: () => gsap.set(imageOverlay, { display: "none" })
    });
  }, { once: true });
}
const imageHeight = Math.round(innerWidth * 3 / 2);
let heightDiff, midY, lastImg;

// Create an image to be used for the zoomed image view
let imageOverlay = document.createElement("img");
imageOverlay.classList.add("zoomedImage");
document.body.appendChild(imageOverlay);

// Handle the grid clicks
gsap.utils.toArray('article').forEach(article => {
  const img = article.querySelector("img");
  const newSRC = img.getAttribute("src").match(/https:\/\/picsum.photos\/id\/([0-9]+)/)[0] + `/${innerWidth}/${imageHeight}`;

  article.addEventListener('click', () => {
    imageOverlay.addEventListener('load', function() {
      lastImg = img;

      gsap.set(imageOverlay, { clearProps: true });
      gsap.set(imageOverlay, { display: 'block', yPercent: -50 });

      const state = Flip.getState(imageOverlay);

      Flip.fit(imageOverlay, lastImg, { scale: true });

      Flip.to(state, { scale: true, duration: 1 });

      addUnzoom()

    }, { once: true });

    imageOverlay.setAttribute("src", newSRC);
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
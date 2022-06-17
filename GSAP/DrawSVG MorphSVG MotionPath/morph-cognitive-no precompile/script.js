var button = document.getElementById("toggle");

var morph = gsap.timeline({paused:true});
morph.to("#brain", { 
  morphSVG: "#cognitive", 
  ease: "Power1.easeOut",
  duration: 3,
  onComplete: () => {
    gsap.to("#brain", {
      fillOpacity: 0
    })
  },
  onReverseComplete: () => {
    gsap.to("#brain", {
      fillOpacity: 1,
      duration: 5
    })
  },
})


window.addEventListener('scroll', function() {
  if (morph.progress() === 0) {
    morph.play();
  } 
});


button.addEventListener("click", function() {
  if (morph.progress() === 0) { //if it's at the beginning, start playing
    morph.play();
  } else { //otherwise toggle the direction on-the-fly
    morph.reversed( !morph.reversed() );
  }
});
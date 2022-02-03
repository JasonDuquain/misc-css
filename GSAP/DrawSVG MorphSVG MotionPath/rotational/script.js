gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

/// DEFAULT
gsap.to("#hippo", {
  duration: 3, 
  morphSVG:{ shape:"#circle", type: "linear" }
});


// USE ROTATIONAL and change ORIGIN if needed
// gsap.to("#hippo", {
//   duration: 3, 
//   morphSVG:{ shape:"#circle", type: "rotational", origin: "50% 50%" }
// });
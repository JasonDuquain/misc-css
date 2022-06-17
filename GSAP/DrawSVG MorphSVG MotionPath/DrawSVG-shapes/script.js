
let shapes = "rect, circle, ellipse, polyline";
let tl = gsap.timeline({ });

console.log(shapes)

tl
.fromTo(shapes, { 
  drawSVG: "100%" 
}, { 
  drawSVG: "50% 50%", stagger: 0.3, duration: 1
})
.fromTo(shapes, { 
  drawSVG: "0%" 
}, { 
  drawSVG: "10%", immediateRender: false, duration: 0.2 
}, "+=0.1")
.to(shapes, { drawSVG:"90% 100%", duration: 1, stagger: 0.5 })
.to(shapes, {
  drawSVG: "100%", 
  duration: 1, 
  rotation:360, 
  scale: 0.5, 
  stroke: "white", 
  strokeWidth: 6, 
  transformOrigin: "50% 50%"
})
.to(shapes, {
  stroke: "red", scale: 1.5, opacity: 0, duration: 0.5, stagger: 0.2
})

GSDevTools.create({});


/* COMPLETE

let shapes = "rect, circle, ellipse, polyline";
let tl = gsap.timeline({ });

tl
.fromTo(shapes, { 
  drawSVG: "100%" 
}, { 
  drawSVG: "50% 50%", stagger: 0.3, duration: 1
})
.fromTo(shapes, { 
  drawSVG: "0%" 
}, { 
  drawSVG: "10%", immediateRender: false, duration: 0.2 
}, "+=0.1")
.to(shapes, { drawSVG:"90% 100%", duration: 1, stagger: 0.5 })
.to(shapes, {
  drawSVG: "100%", 
  duration: 1, 
  rotation:360, 
  scale: 0.5, 
  stroke: "white", 
  strokeWidth: 6, 
  transformOrigin: "50% 50%"
})
.to(shapes, {
  stroke: "red", scale: 1.5, opacity: 0, duration: 0.5, stagger: 0.2
})

GSDevTools.create({});

*/
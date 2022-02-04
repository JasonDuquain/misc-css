
let shapes = "rect, circle, ellipse, polyline";
let tl = gsap.timeline({ /*repeat:1, yoyo:true*/ });



/* --- controls --- */
GSDevTools.create({});


/* COMPLETE

let shapes = "rect, circle, ellipse, polyline";
let tl = gsap.timeline({repeat:1, yoyo:true});

tl.fromTo(shapes, {drawSVG:"100%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})
  .fromTo(shapes, {drawSVG:"0%"}, {duration: 0.1, drawSVG:"10%", immediateRender:false}, "+=0.1")
  .to(shapes, {duration: 1, drawSVG:"90% 100%", stagger: 0.5})
  .to(shapes, {duration: 1, rotation:360, scale:0.5, drawSVG:"100%", stroke:"white", strokeWidth:6, transformOrigin:"50% 50%"})
  .to(shapes, {duration: 0.5, stroke:"red", scale:1.5, opacity:0, stagger: 0.2})

GSDevTools.create({});

*/
gsap.registerPlugin(DrawSVGPlugin);

// this fades the gsap hero guy, gsap text, and purple bg in at the end of the animation
var fades = gsap.timeline()
  .to(".gsap-3-logo", {autoAlpha:1, duration:0.3})
  .from(".logo-guy", {x:-10, y:3, ease:"power1", duration:3.2}, 5.7)
  .from(".logo-guy, .purple-bg", {autoAlpha:0, duration:2.5}, 5.5)

var gsapLetters = gsap.timeline({defaults:{duration:0.5}})
  .from(".letter-outline", {drawSVG:false, duration:1, stagger:0.2})
  .addLabel("lettersIn", "-=0.9")
  .from(".letter-face", {scale: 0.3, transformOrigin:"center center", ease:"power4", duration:1.3, stagger:0.13}, "lettersIn")
  .to(".letter-face", {opacity:1, stagger:0.1}, "lettersIn")
  .from(".letter-outline", {stroke:"#88CE02", stagger:0.1}, "lettersIn+=0.6");

var intro3 = gsap.timeline()
  .set(".outline-3", {stroke:"#88CE02", drawSVG:"50% 50%"})
  .set(".outline-3-2", {drawSVG:"50% 50%"})
  .to(".outline-3", {drawSVG:"0% 100%", ease:"power1.in", duration:1.8})
  .fromTo("#mask-3", {x:-500, y:-130}, {x:0, y:0, duration:1.8, ease:"none"}, "-=0.2")
  .fromTo(".waves-3", {x:500, y:130, autoAlpha:1}, {x:0, y:0, duration:1.8, ease:"none"}, "-=1.8")
  .to(".outline-3-2", {drawSVG:"0% 100%", ease:"power1.in", duration:2}, 0.4);

var move3 = gsap.timeline()
  .set(".logo-3-whole", {svgOrigin:"605 150", immediateRender:true})
  .from(".logo-3-whole", {x:-260, rotation:-360, duration:0.9, ease:"back.inOut"})
  .to(".logo-3-whole", {y:-130, ease:"power1.inOut", duration:0.3}, 0.2)
  .to(".logo-3-whole", {y:0, ease:"elastic", duration:1.1}, 0.5)
  .to(".logo-3-shadow", {autoAlpha:1, duration:1.3}, "-=0.9")

var master = gsap.timeline({delay:0.5})
  .add(intro3)
  .add(move3, "-=0.3")
  .add(gsapLetters, "-=1.3")
  .add(fades, 0);

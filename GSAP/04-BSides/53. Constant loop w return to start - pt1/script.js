
let hover = false;

hoverBtn.addEventListener("mouseenter", hoverOn);
hoverBtn.addEventListener("mouseleave", hoverOff);

const tween = gsap.to(".circle", { 
  duration:1, 
  x:200,
  paused: true,                                
  repeat: -1, 
  yoyo: true, 
  ease: "sine.inOut"                               
});

function hoverOn() {
  tween.play()
}

function hoverOff() {
 tween.pause()
}

function checkHover() {
  
}

/* START

let hover = false;

hoverBtn.addEventListener("mouseenter", hoverOn);
hoverBtn.addEventListener("mouseleave", hoverOff);

const tween = gsap.to(".circle", { 
  duration:1, 
  x:200,
  paused: true,                                
  repeat: -1, 
  yoyo: true, 
  ease: "sine.inOut"                               
});

function hoverOn() {
  tween.play()
}

function hoverOff() {
 tween.pause()
}

function checkHover() {
  
}

*/
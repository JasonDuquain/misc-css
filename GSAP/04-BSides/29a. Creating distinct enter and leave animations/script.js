/* just watch 1st demo - this coding starts at 9:26 */

let btn = document.querySelector(".btn");

gsap.defaults({ duration: 1.5 })
gsap.to(".wrapper", { autoAlpha:1 }) 
gsap.set(".bar", {
  scaleX: 0,
  transformOrigin: "left center",
  duration: 0.5
})

const tl = gsap.timeline({ paused:true })
tl.to(".bar", { scaleX: 1 })
tl.to(".bar", { x: 200 })


btn.addEventListener("mouseenter", () => {
  tl.play()
})

btn.addEventListener("mouseleave", () => {
 
})


/* 9:26 START

let btn = document.querySelector(".btn");

gsap.defaults({ duration: 1.5 })
gsap.to(".wrapper", { autoAlpha:1 }) 
gsap.set(".bar", {
  scaleX: 0,
  transformOrigin: "left center",
  duration: 0.5
})

const tl = gsap.timeline({ paused:true })
tl.to(".bar", { scaleX: 1 })
tl.to(".bar", { x: 200 })


btn.addEventListener("mouseenter", () => {
  tl.play()
})

btn.addEventListener("mouseleave", () => {
 
})

*/

/* COMPLETE


let btn = document.querySelector(".btn");

gsap.defaults({ duration: 0.5 })
gsap.to(".wrapper", {autoAlpha:1}) 
gsap.set(".bar", {
  scaleX:0,
  transformOrigin:"left center",
  duration: 0.5
})

let exitTime = 0;

const tl = gsap.timeline({ paused:true })
tl.to(".bar", {scaleX:1})
.addPause()
exitTime = tl.duration();
tl.to(".bar", {x:200})

btn.addEventListener("mouseenter", () => {
  (tl.time() < exitTime) ? tl.play() : tl.restart();
})

btn.addEventListener("mouseleave", () => {
  (tl.time() < exitTime) ? tl.reverse() : tl.play();
})

*/
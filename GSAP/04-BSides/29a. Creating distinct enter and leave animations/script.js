/* just watch 1st demo - this coding starts at 9:26 */

gsap.defaults({ duration: 1.5 })
let btn = document.querySelector(".btn");

gsap.to(".wrapper", {autoAlpha:1}) //fouc
gsap.set(".bar", {
  scaleX:0,
  transformOrigin:"left center",
  duration: 0.5
})

const tl = gsap.timeline({ paused:true })
tl.to(".bar", {scaleX:1})
tl.to(".bar", {x:200})


btn.addEventListener("mouseenter", () => {
  tl.play()
})

btn.addEventListener("mouseleave", () => {
 
})

/* 9:26 START

gsap.defaults({ duration: 1.5 })
let btn = document.querySelector(".btn");
gsap.to(".wrapper", { autoAlpha:1 }) //fouc
gsap.set(".bar", {
  scaleX:0,
  transformOrigin:"left center",
  duration: 0.5
})

const tl = gsap.timeline({ paused:true })
tl.to(".bar", { scaleX:1 })
tl.to(".bar", { x:200 })


btn.addEventListener("mouseenter", () => {
  tl.play()
})

btn.addEventListener("mouseleave", () => {
 
})

*/
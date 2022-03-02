console.clear();

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: true,
    pin: true,
    markers: true } 
});

tl.to(".hero", { opacity: 0, scale: 0.5 })


/* START

console.clear();

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: true,
    pin: true,
    markers: true } 
});

tl.to(".hero", { opacity: 0, scale: 0.5 })

*/
gsap.registerPlugin(Flip);


//gsap.to(".container", {scaleY: 0.8, rotation: 25});
//gsap.to(".target", {scale: 1.2, rotation: -18, x: 60, y: 60});

document.querySelector("button").addEventListener("click", () => {
  
});

/* COMPLETE

gsap.registerPlugin(Flip);

//gsap.to(".container", {scaleY: 0.8, rotation: 25});
//gsap.to(".target", {scale: 1.2, rotation: -18, x: 60, y: 60});

document.querySelector("button").addEventListener("click", () => {
  let tweeny = Flip.fit(".container", ".target", {
    scale: true,
    fitChild: ".child2",
    duration: 2,
    ease: "power1.inOut",
    onComplete: () => console.log("done!") });

});

*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
 wrapper: "#wrapper",
 content: "#content",
 smooth: 3,
 effects: true
});

let headings = gsap.utils.toArray("h1").reverse();

headings.forEach((heading, i) => {
  
});


/* COMPLETE

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
 wrapper: "#wrapper",
 content: "#content",
 smooth: 3,
 effects: true
});

let headings = gsap.utils.toArray("h1").reverse();

headings.forEach((heading, i) => {
 let headingIndex = i + 1;
 let mySplitText = new SplitText(heading, { type: "chars" });
 let chars = mySplitText.chars;

 chars.forEach((char, i) => {
  smoother.effects(char, { 
    lag: (i + headingIndex) * 0.15, 
    speed: 1 
  });
 });
});

*/
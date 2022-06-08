gsap.registerPlugin(Observer);

let sections = document.querySelectorAll("section");
let images = document.querySelectorAll(".bg");
let headings = gsap.utils.toArray(".section-heading");
let outerWrappers = gsap.utils.toArray(".outer");
let innerWrappers = gsap.utils.toArray(".inner");

let splitHeadings = headings.map(
  heading => new SplitText(heading, { 
    type: "chars,words,lines",
    linesClass: "clip-text"
  })
);

let currentIndex = -1;

// gsap.utils.wrap: Returns the next item in an arr or number in a range after the given index. Or returns a function that returns that obj or value if no index is given. Places a number (or index of an arr) into a specified range such that when it exceeds the maximum, it wraps back to the start and if it is less than the minimum, it wraps to the end. In the context of tweening this has the effect of cycling through the values.
let wrap = gsap.utils.wrap(0, sections.length - 1);

let animating;

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

function gotoSection(index, direction) {
  index = wrap(index); // make sure it's valid
  console.log(index);
  animating = true;
  let fromTop = direction === -1;
  let dFactor = fromTop ? -1 : 1;

  let tl = gsap.timeline({
    defaults: {duration: 1.25, ease: "power1.inOut"},
    onComplete: () => animating = false,
  });

  // The first time this function runs, current is -1
  if (currentIndex >= 0) { 
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(images[currentIndex], { yPercent: -15 * dFactor })
      .set(sections[currentIndex], { autoAlpha: 0 });
  }
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  tl.fromTo([outerWrappers[index], innerWrappers[index]], {
    yPercent: i => i ? -100 * dFactor : 100 * dFactor
  }, { 
    yPercent: 0 
  }, 0)
    .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
    .fromTo(splitHeadings[index].chars, {
      autoAlpha: 0, yPercent: 150 * dFactor
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2",
        stagger: { each: 0.02, from: "random" }
      }, 0.2);
  
  currentIndex = index;
}

Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => {
    !animating && gotoSection(currentIndex - 1, -1)
  },
  onUp: () => {
    !animating && gotoSection(currentIndex + 1, 1)
  },
  tolerance: 10,
  preventDefault: true,
});

gotoSection(0, 1);
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
  
}

Observer.create({
  
});

gotoSection(0, 1);


/* START

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
  
}

Observer.create({
  
});

gotoSection(0, 1);

*/
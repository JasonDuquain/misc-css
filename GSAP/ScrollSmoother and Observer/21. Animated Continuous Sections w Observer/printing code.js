
//////////////// HTML
<header>
  <div>Animated Sections</div>
  <div><a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a></div>
</header>
<section class="first">
  <div class="outer">
    <div class="inner">
      <div class="bg one">
        <h2 class="section-heading">Scroll down</h2>
      </div>
    </div>
  </div>

</section>
<section class="second">
  <div class="outer">
    <div class="inner">
      <div class="bg">
        <h2 class="section-heading">Animated with GSAP</h2>
      </div>
    </div>
  </div>
</section>
<section class="third">
  <div class="outer">
    <div class="inner">
      <div class="bg">
        <h2 class="section-heading">GreenSock</h2>
      </div>
    </div>
  </div>
</section> <!-- 2 MORE SECTS -->

////////////// CSS
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  color: white;
  background: black;
  font-family: "Cormorant Garamond", serif;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.5em;
  margin-right: -0.5em;
  color: #cccccc;
  width: 90vw;
  max-width: 1200px;
}

header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  z-index: 3;
  height: 7em;
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(0.66rem, 2vw, 1rem);
  letter-spacing: 0.5em;
}

section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;
}

section .outer,
section .inner {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

section .bg {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background-size: cover;
  background-position: center;
}

section .bg h2 { z-index: 2; }

section .bg .clip-text { overflow: hidden; }

.first .bg {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url(img1.jpg);
}

.second .bg {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url(img2.jpg);
}

.third .bg {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url(img3.jpg);
}

.fourth .bg and .fifth .bg { ... }
  

h2 * { will-change: transform; }


/////////////////// JS
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
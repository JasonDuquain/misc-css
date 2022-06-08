
/////////////// HTML
<div id="wrapper">
 <section id="content">
  <section class="spacer"></section>
  <div class="title">
   <h1>3D glasses</h1>
   <h1>3D glasses</h1>
   <h1>3D glasses</h1>
  </div>
  <section class="spacer"></section>
 </section>
</div>


///////////////////// CSS
body {
 background-color: white;
 color: black;
 overscroll-behavior: none;
 margin: 0; padding: 0;
 overflow-x: hidden;
 font-family: termina, sans-serif;
}

#wrapper {
 overflow: hidden;
 position: fixed;
 height: 100%;
 width: 100%;
 inset: 0;
}

#content {
 overflow: visible;
 width: 100%;
}

.title { height: 200px; }

h1 {
 position: absolute;
 width: 100%;
 left: 0;
 right: 0;
 text-align: center;
 font-size: 8vw;
}

h1:nth-child(1) { color: #1dffff; }

h1:nth-child(2) {
 color: #fe0604;
 mix-blend-mode: color;
}

.spacer:nth-of-type(1) { height: 40vh; }

.spacer:nth-of-type(2) { height: 80vh; }


/////////////////// JS
const smoother = ScrollSmoother.create({
 wrapper: "#wrapper",
 content: "#content",
 smooth: 3,
 effects: true
});

let headings = gsap.utils.toArray("h1").reverse();

headings.forEach((heading, i) => {
  let headingIndex = i + 1;
  let mySplitText = new SplitText(heading, { type: "chars"});
  let chars = mySplitText.chars;

  chars.forEach((char, i) => {
    smoother.effects(char, {
      lag: (i + headingIndex) * 0.15,
      speed: 1
    })
  })
});


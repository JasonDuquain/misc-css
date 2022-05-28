<div class="full hero">
    <div class="dot"></div>
    <h1>FINANCIAL PLANNING</div>
</div>

<div class="main">
  <h2>Mutual Funds</h2>
  <p>Aliquam .....ijaijia</p>
  <p>In et ......estibu</p>
  <p>In sce........lalalal</p><br><br>
</div>


body {
  overflow-x: hidden;
  background-color: #26528C; ...
}

h2 {
  font-size:clamp(24px, 5vw, 50px);
}

p {
  font-size:clamp(18px, 3vw, 30px);
  line-height:clamp(1.5em, 2vw, 3em);
}

.full {
  width: 100%; height: 100vh;
  overflow:hidden;
}

.dot {
  position: absolute;
  width: 142vmax;
  height: 142vmax;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  background-color: #113059;
}

h1 {
  font-size: 8vmin; font-weight: bold;
  margin: 0; white-space: nowrap;
  position: absolute; left: 100%;
  top: 50%; transform: translateY(-50%);
}


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: true,
    pin: true,
  }
});

tl.to(".dot", {scale:1})
  .to("h1", {x:"-100vw", xPercent:-100}, 0)
  .set("body", {backgroundColor:"#113059"})

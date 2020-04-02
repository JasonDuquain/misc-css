console.clear();

const container = document.querySelector('.container');
let wArray = [161, 614, 189, 278, 404],
    tl;

function animate() {
  tl = gsap.timeline({
    
  });
  tl.from('.container__base', {
    
  })
  .from('.moon__svg-rects rect', {
    
    
  })
  .to('.moon__txt-bg rect', {
    
  })
  .from('text', {
    
  })
  .from('.moon__img', {
    
  });
}

function init() {
    
}

function resize() {
  let vw = window.innerWidth;
  let vh = window.innerHeight;
  let wh = container.offsetWidth;
  let scaleFactor = 1;
  
  if (vw / vh >= 1) { scaleFactor = vh / wh }
  else { scaleFactor = vw / wh }
  if (scaleFactor < 1) { gsap.set(container, { scale: scaleFactor }); }
  else { gsap.set(container, { scale: 1 }); }
}

window.onresize = resize;

window.onload = () => {
	init();
    resize();
};
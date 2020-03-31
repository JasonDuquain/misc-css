console.clear();

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const container = select('.container');
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
	
}

window.onresize = resize;

window.onload = () => {
	init();
    resize();
    
};
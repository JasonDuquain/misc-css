// Tutorial: https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27


window.addEventListener('scroll', (event) => {
  let depth, movement, translate3d;
  let topDistance = this.scrollY;
  let layers = document.querySelectorAll("[data-type='parallax']");

  for (let i = 0; i < layers.length; i++) {
    
  }
});


/* COMPLETE

window.addEventListener('scroll', (event) => {
  let depth, movement, translate3d;
  let topDistance = this.scrollY;
  let layers = document.querySelectorAll("[data-type='parallax']");

  for (let i = 0; i < layers.length; i++) {
    depth = layers[i].getAttribute('data-depth');
    movement = -(topDistance * depth);
    layers[i].style.transform = `translate3d(0, ${movement}px, 0)`;
  }
});

*/



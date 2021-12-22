// https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27


window.addEventListener('scroll', (event) => {
  let depth;
  let topDistance = this.pageYOffset || this.scrollY;
  let layers = document.querySelectorAll("div[data-type='parallax']");

  for (let i = 0; i < layers.length; i++) {
    
  }
});


/* COMPLETE

window.addEventListener('scroll', (event) => {
  let depth;
  let topDistance = this.pageYOffset || this.scrollY;
  let layers = document.querySelectorAll("div[data-type='parallax']");

  for (let i = 0; i < layers.length; i++) {
    depth = layers[i].getAttribute('data-depth');
    layers[i].style.transform = `translate3d(0, -${topDistance * depth}px, 0)`;
  }
});

*/



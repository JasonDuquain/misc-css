let hero = document.querySelector('.hero');
let heroTitle = document.querySelector('h2');


window.addEventListener('resize', () => {
  console.log('hero padding: ', getComputedStyle(hero).paddingTop);
  console.log('hero title: ', getComputedStyle(heroTitle).fontSize);
})
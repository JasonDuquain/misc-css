let h2 = document.querySelector('h2');

window.addEventListener('resize', () => {
  console.log(getComputedStyle(h2).fontSize);
})
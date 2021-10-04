let wrapper = document.querySelector('.wrapper');

window.addEventListener('resize', () => {
  console.log(getComputedStyle(wrapper).gap);
})
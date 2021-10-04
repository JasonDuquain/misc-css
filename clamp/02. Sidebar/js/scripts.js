let sidebar = document.querySelector('aside');

window.addEventListener('resize', () => {
  console.log(sidebar.getBoundingClientRect().width);
  console.log(window.innerWidth, window.innerWidth * .30)
})
let element = document.querySelector('.element');

let elementAfterStyles = getComputedStyle(element, '::after');


window.addEventListener('resize', () => {
  console.log('el height: ', getComputedStyle(element).height)
  console.log(elementAfterStyles.backgroundImage)
})
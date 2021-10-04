
let element = document.querySelector('.element');

window.addEventListener('resize', () => {
  console.log('border: ', getComputedStyle(element).borderWidth)
  console.log('border radius: ', getComputedStyle(element).borderRadius)
  console.log('box shadow: ' , getComputedStyle(element).boxShadow)
})
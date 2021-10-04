let h2 = document.querySelector('h2');
let pseudoElementStyle = getComputedStyle(h2, '::before')

window.addEventListener('resize', () =>{
  console.log('h2', getComputedStyle(h2).fontSize);
  console.log('h2::before', pseudoElementStyle.fontSize);
})
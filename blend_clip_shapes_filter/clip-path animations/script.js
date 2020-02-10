let bigBox = document.querySelector('.boxes');
let boxOne = document.querySelector('.box1');
let boxTwo = document.querySelector('.box2');

let value = 'circle';

bigBox.addEventListener('click', function(e) {
    console.log(value);
  boxOne.classList.add(value + '-leave-active');
  
  boxOne.addEventListener('animationend', function() {
    boxTwo.style.opacity = 1;
    boxOne.style.opacity = 0;
    boxTwo.classList.add(value + '-enter-active');
    boxOne.classList.remove(value + '-leave-active');
    
    //boxTwo.classList.remove('polygon-enter-active');
  })
  
  if (boxOne.style.opacity === "0") {
      console.log(0);
      boxTwo.classList.remove(value + '-enter-active');
    
      setTimeout(() => {
        
        boxTwo.classList.add(value + '-leave-active');
    
        boxTwo.addEventListener('animationend', function() {
        boxOne.style.opacity = 1;
        boxTwo.style.opacity = 0;
        boxOne.classList.add(value + '-enter-active');
        boxTwo.classList.remove(value + '-leave-active');
          
         
      /* doesnt work - box2 still appears at the end 
      boxTwo.addEventListener('animationend', function(e) {
        boxOne.style.opacity = 1;
        boxTwo.style.opacity = 0;
      })
      */
      
     })
        
      }, 0)
  }
  
  
});

document.addEventListener('input', function (event) {

	console.log(event.target.value);
    value = event.target.value
    document.documentElement.style.setProperty('--name', event.target.value);
	// The selected option element
	console.log(event.target.options[event.target.selectedIndex]);

}, false);
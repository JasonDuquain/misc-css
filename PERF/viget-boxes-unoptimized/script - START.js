/********* Initialize and set state ********/

let requestID;
let state = {
  boxes: document.querySelectorAll('.box'),
  data: {}
}

state.boxes.forEach((box, i) => {
  state.data[i] = {
    direction: 'forward',
    oldPosition: i * (Math.random() * 150)
  }
})

moveBox = moveBox.bind(state);

/******** Set callback for requestAnimationFrame ***********/

function moveBox() {
  

  
}


/***********  Start animation  *********************/




/************* Set button click handlers ****************/

let startButton = document.getElementById('start');
let stopButton  = document.getElementById('stop');

startButton.addEventListener('click', startAnimation);
stopButton.addEventListener('click', stopAnimation);



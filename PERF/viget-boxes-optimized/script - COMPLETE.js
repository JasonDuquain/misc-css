/**************************************
  Initialize and set state 
***************************************/

let requestID;
let state = {
  boxes: document.querySelectorAll('.box'),
  data: {}
}

state.boxes.forEach((box, i) => {
  state.data[i] = {
    direction: 'forward',
    oldPosition: i * (Math.random() * 150),
    boxWidth: box.offsetWidth  // ✅ cache values ahead of time
  }
})

moveBox = moveBox.bind(state);


/**************************************
  Set callback for requestAnimationFrame
***************************************/

function moveBox() {
  // 1) Determine next direction
  this.boxes.forEach((box, i) => {
    let data = this.data[i];

    let boxPosition = box.getBoundingClientRect().x; // ✅ read from DOM, taking advantage of cached snapshot
    let boxHitRightBoundary = boxPosition + data.boxWidth >= window.innerWidth;
    let boxHitLeftBoundary  = boxPosition <= 0;

    if (boxHitRightBoundary) {
      data.direction = 'backward';
    }
    else if (boxHitLeftBoundary) {
      data.direction = 'forward';
    }
  })

  // 2) Move box
  this.boxes.forEach((box, i) => {
    let data = this.data[i];

    newPosition = (data.direction === 'forward') ? data.oldPosition += 5 : data.oldPosition -= 5;

    box.style.transform = `translateX(${newPosition}px)`; // ✅ write to DOM, browser doesn't execute until JS is done
  })

  // 3) Call requestAnimationFrame again to loop
  requestID = requestAnimationFrame(moveBox);
}


/**************************************
  Start animation
***************************************/
requestAnimationFrame(moveBox);


/**************************************
  Set button click handlers 
***************************************/

let startButton = document.getElementById('start');
let stopButton  = document.getElementById('stop');

startButton.addEventListener('click', startAnimation);
stopButton.addEventListener('click', stopAnimation);


function startAnimation() {
  requestAnimationFrame(moveBox);
  stopButton.removeAttribute('disabled');
  this.setAttribute('disabled', 'true');
}

function stopAnimation() {
  window.cancelAnimationFrame(requestID);
  startButton.removeAttribute('disabled');
  this.setAttribute('disabled', 'true');
}
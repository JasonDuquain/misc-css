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
  this.boxes.forEach((box, i) => {  // ⚠️ thrash repeatedly in quick succession
    let data = this.data[i];

    // 1) Move box
    if (data.direction === 'forward') {
      newPosition = data.oldPosition += 5;
    }
    else {
      newPosition = data.oldPosition -= 5;
    }

    box.style.marginLeft = `${newPosition}px`; // ⚠️ write to DOM, invalidating previous snapshot

    // 2) Determine next direction
    let boxPosition = box.getBoundingClientRect().x; // ⚠️ read from DOM, forcing Layout because previous snapshot was invalidated
    let boxWidth    = box.offsetWidth;
    let windowWidth = window.innerWidth;
    let boxHitRightBoundary = boxPosition + boxWidth >= windowWidth;
    let boxHitLeftBoundary  = boxPosition <= 0;

    if (boxHitRightBoundary) {
      data.direction = 'backward';
    }
    else if (boxHitLeftBoundary) {
      data.direction = 'forward';
    }
  }) /* forEach() end */

  // 3) Call requestAnimationFrame again to loop
  requestID = requestAnimationFrame(moveBox);
}


/***********  Start animation  *********************/

requestAnimationFrame(moveBox);


/************* Set button click handlers ****************/

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
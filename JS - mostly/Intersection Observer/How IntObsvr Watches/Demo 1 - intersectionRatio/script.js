const root = document.querySelector('#root');
const target = document.querySelector('#target');
const output = document.querySelector('#output pre');

const io_options = {
    
}

function io_callback(entries) {
   
}

function clickHandler(e) {
    
}

document.querySelectorAll('#buttons button').forEach(btn => btn.addEventListener('click', clickHandler));





/* COMPLETE

const root = document.querySelector('#root');
const target = document.querySelector('#target');
const output = document.querySelector('#output pre');

const io_options = {
  root: root,
  rootMargin: '0px',
  threshold: [...Array(100).keys()].map(x => x / 100)
};

let io_observer;

function io_callback (entries) {
  output.innerText = entries[0].intersectionRatio;
}

function clickHandler (e) {
  target.setAttribute('class', e.target.id);
}

document.querySelectorAll('#buttons button').forEach(btn => btn.addEventListener('click', clickHandler));

io_observer = new IntersectionObserver(io_callback, io_options);
io_observer.observe(target);

*/
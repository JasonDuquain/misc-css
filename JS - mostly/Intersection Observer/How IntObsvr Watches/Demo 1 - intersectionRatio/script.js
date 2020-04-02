const root = document.querySelector('#root');
const target = document.querySelector('#target');

const output = document.querySelector('#output pre');
const options = {
  
}

function callback(entries) {
   
}

function clickHandler(e) {
   
}

document.querySelectorAll('#buttons button').forEach(btn => btn.addEventListener('click', clickHandler));





/* COMPLETE

const root = document.querySelector('#root');
const target = document.querySelector('#target');
const output = document.querySelector('#output pre');

const options = {
  root: root,
  rootMargin: '0px',
  threshold: [...Array(100).keys()].map(x => x / 100)
};

function callback (entries) {
  output.innerText = entries[0].intersectionRatio;
}

function clickHandler (e) {
  target.setAttribute('class', e.target.id);
}

document.querySelectorAll('#buttons button').forEach(btn => btn.addEventListener('click', clickHandler));

const observer = new IntersectionObserver(callback, options);
observer.observe(target);

*/
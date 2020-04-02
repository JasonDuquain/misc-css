const root = document.querySelector('#root');
const rootSize = document.querySelector('#rootSize');
const target = document.querySelector('#target');
const targetSize = document.querySelector('#targetSize');
const output = document.querySelector('#output pre');
const hay = document.querySelector('#hay')

const options = {
  root: root,
  rootMargin: '0px',
  threshold: [...Array(100).keys()].map(x => x / 100)
};

function callback (entries) {
  
}

rootSize.addEventListener('click', function () {
  root.classList.toggle('large')
});

targetSize.addEventListener('click', function () {
  root.classList.toggle('small')
});

let observer = new IntersectionObserver(callback, options);
observer.observe(target);

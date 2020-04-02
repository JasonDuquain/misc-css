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
  const ratio = entries[0].intersectionRatio;
  const boundingRect = entries[0].boundingClientRect;
  const intersectionRect = entries[0].intersectionRect;
  
  if (ratio === 0) {
    output.innerText = 'outside';
  } else if (ratio < 1) {
    output.innerText = (boundingRect.top < intersectionRect.top) ? 'on the top' : 'on the bottom'
  } else {
    output.innerText = 'inside';
  }
  
  hay.innerText = entries[0].intersectionRatio;
}

rootSize.addEventListener('click', function () {
  root.classList.toggle('large')
});

targetSize.addEventListener('click', function () {
  target.classList.toggle('small')
});

let observer = new IntersectionObserver(callback, options);
observer.observe(target)

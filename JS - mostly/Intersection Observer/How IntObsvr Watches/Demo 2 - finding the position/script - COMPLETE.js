const root = document.querySelector('#root');
const rootSize = document.querySelector('#rootSize');
const target = document.querySelector('#target');
const targetSize = document.querySelector('#targetSize');
const output = document.querySelector('#output pre');

const io_options = {
  root: root,
  rootMargin: '0px',
  threshold: [...Array(100).keys()].map(x => x / 100)
};

let io_observer;

function io_callback (entries) {
  const ratio = entries[0].intersectionRatio;
  const boundingRect = entries[0].boundingClientRect;
  const intersectionRect = entries[0].intersectionRect;

  if (ratio === 0) {
    output.innerText = 'outside';
  } else if (ratio < 1) {
    if (boundingRect.top < intersectionRect.top) {
      output.innerText = 'on the top';
    } else {
      output.innerText = 'on the bottom';
    }
  } else {
    output.innerText = 'inside';
  }
}

rootSize.addEventListener('click', function () {
  root.classList.toggle('large');
});

targetSize.addEventListener('click', function () {
  target.classList.toggle('small');
});

io_observer = new IntersectionObserver(io_callback, io_options);
io_observer.observe(target);
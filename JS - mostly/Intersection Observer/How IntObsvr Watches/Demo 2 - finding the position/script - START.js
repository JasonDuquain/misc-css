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

function io_callback (entries) {
  
}

rootSize.addEventListener('click', function () {
  
});

targetSize.addEventListener('click', function () {
  
});


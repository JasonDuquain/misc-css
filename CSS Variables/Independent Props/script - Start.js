const main = document.querySelector('main');
document.getElementById('clip').addEventListener('click', updatePlayState);
document.getElementById('color').addEventListener('click', updatePlayState);

function updatePlayState(e) {
  
}
/*
CSS Variables (Custom Properties) again for the win... allowing you to control an individual value of a property that has multiple values at the same time.  Otherwise the code looks something like the following (and you'd have to change the JS if you change the order of the animations in CSS... and it gets more complicated the more animations there are):

function updatePlayState(e) {
  var current = window.getComputedStyle(main).animationPlayState;
  var parts = current.split(',');
  var index = (e.currentTarget.id === 'clip') ? 0 : 1;
  parts[index] = e.currentTarget.checked ? 'paused' : 'running';
  main.style.animationPlayState = parts.join(',');
}
*/

//Extra fun
var p = {
  a: [
    document.getElementById('a1'),
    document.getElementById('a2'),
    document.getElementById('a3')
  ],
  b: [
    document.getElementById('b1'),
    document.getElementById('b2'),
    document.getElementById('b3')
  ]
}

var lyrics = {
  a: [
    ['You', 'Say', 'Yes'],
    ['You', 'Say', 'Stop'],
    ['You', 'Say', 'Goodbye']
  ],
  b: [
    ['And I', 'Say', 'Hello'],
    ['I', 'Say', 'No'],
    ['And I', 'Say', 'Go Go Go']
  ]
}

var iteration = 0
main.addEventListener('animationiteration', function(e) {
  
  
  
  // if (step % 2 === 1) {
  //   var index = Math.floor(step/2);
  //   updateLyrics('a', index);
  // } else {
  //   var index = Math.round(step/2);
  //   updateLyrics('b', index);
  // }
  
  
});

function updateLyrics(key, index) {
  p[key][0].textContent = lyrics[key][index][0];
  p[key][1].textContent = lyrics[key][index][1];
  p[key][2].textContent = lyrics[key][index][2];
}
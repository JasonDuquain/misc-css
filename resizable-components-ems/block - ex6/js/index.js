var slider = document.querySelector('#range');
    item = document.querySelector('.item'),
    current = document.querySelector('.current'),
    style = window.getComputedStyle(item, null).getPropertyValue('font-size'),
    fontSize = parseFloat(style),
    toggleClip = document.querySelector('#toggle');

current.innerHTML = fontSize + "px";

range.addEventListener('input', function() {
  var newValue = this.value + "px";
  item.style.fontSize = newValue;
  current.innerHTML = newValue;
});

toggleClip.addEventListener('change', function(){
  if(item.classList.contains('clip-circle')) {
    item.classList.remove('clip-circle');
  } else {
    item.classList.add('clip-circle');
  }
});
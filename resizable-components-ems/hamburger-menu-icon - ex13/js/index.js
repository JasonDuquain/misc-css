var slider = document.querySelector('#range');
    item = document.querySelector('.menu'),
    current = document.querySelector('.current'),
    style = window.getComputedStyle(item, null).getPropertyValue('font-size'),
    fontSize = parseFloat(style);

current.innerHTML = fontSize + "px";

range.addEventListener('input', function() {
  var newValue = this.value + "px";
  item.style.fontSize = newValue;
  current.innerHTML = newValue;
});
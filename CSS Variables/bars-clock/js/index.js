var hourbar = document.getElementById('hour')
var minutebar = document.getElementById('minute')
var secondbar = document.getElementById('second')

setInterval(() => {
    
}, 1000);


/* COMPLETE

setInterval(() => {
    var today = new Date();
    var curhour = today.getHours();
    var curminute = today.getMinutes();
    var cursecond = today.getSeconds();
    console.log(curhour, curminute, cursecond, curhour / 24, curminute / 60);
    hourbar.style.setProperty('--hourpct', curhour / 24);
    minutebar.style.setProperty('--minutepct', curminute / 60);
    secondbar.style.setProperty('--secondpct', cursecond / 60);
}, 1000);


*/



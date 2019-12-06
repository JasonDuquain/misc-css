
var raf;
var st;
var battery = document.getElementById('battery');
var batterystatus = document.getElementById('status');
var action = 'charge';
var curcharge = 0;



/* START

var raf;
var st;
var battery = document.getElementById('battery');
var batterystatus = document.getElementById('status');
var action = 'charge';
var curcharge = 0;

*/

/* COMPLETE

var raf;
var st;
var battery = document.getElementById('battery');
var batterystatus = document.getElementById('status');
var action = 'charge';
var curcharge = 0;

function updatebattery(timestamp){
	if (action == 'charge') {
		curcharge += 0.5
		if (curcharge > 100){
			action = 'discharge'
		}
	}
	else {
		curcharge -= 0.5
		if (curcharge < 0){
			action = 'charge'
		}
	}
	batterystatus.style.width = curcharge + '%'
	raf = requestAnimationFrame(updatebattery)  
}

requestAnimationFrame(updatebattery)

// if using setInterval only set it here..not inside the fn
//st = setInterval(updatebattery, 4.7)


battery.addEventListener('mouseenter', function(){
	cancelAnimationFrame(raf)
    //clearTimeout(st);
}, false)



*/
//JQUERY ----- PARALLAX FUNCTION
/*$(window).scroll(function(e) {
	var scrolled = $(window).scrollTop();
	$(".one").css("bottom", -(scrolled * 0.2) + "px");
	$(".two").css("bottom", -(scrolled * 0.3) + "px");
	$(".three").css("bottom", -(scrolled * 0.4) + "px");
	$(".four").css("bottom", -(scrolled * 0.5) + "px");
	$(".five").css("bottom", -(scrolled * 0.6) + "px");
});
*/


let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');


window.addEventListener('scroll', function(e) {
    var scrolled = window.scrollY;
    //var scrolled = document.documentElement.scrollTop also works
    one.style.bottom = `-${scrolled * .2}px`;
    two.style.bottom = `-${scrolled * .3}px`;
    three.style.bottom = `-${scrolled * .4}px`;
    four.style.bottom = `-${scrolled * .4}px`;
    five.style.bottom = `-${scrolled * .5}px`;
});




















/*

window.addEventListener('scroll', function(e) {
	var scrolled = window.scrollY;
	one.style.bottom = `-${scrolled * .2}px`;
	two.style.bottom = `-${scrolled * .3}px`;
	three.style.bottom = `-${scrolled * .4}px`;
	four.style.bottom = `-${scrolled * .4}px`;
	five.style.bottom = `-${scrolled * .5}px`;
});

*/


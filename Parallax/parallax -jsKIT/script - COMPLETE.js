var bubble1 = document.getElementById('bubbles1')
var bubble2 = document.getElementById('bubbles2')
var fish = document.getElementById('fish')

let bodyHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
); 
var windowHeight = document.documentElement.clientWidth; // do not use window.innerWidth because if there is a vertical scrollbar it is included in the width

function parallax() {
    var scrollTop = window.pageYOffset || window.scrollY;

    var scrollAmount = Number(((scrollTop / (bodyHeight - windowHeight)) * 100).toFixed(0));
    // get amt scrolled in % - using toFixed to avoid px values such as 24.954285124...remember that toFixed() returns a string!..so use Number() or parseInt() 

    //console.log(scrollAmount);

    //move bubble1 at 20% of scroll speed 
    bubble1.style.transform = `translateY(-${scrollTop * .2}px)`;
    // move bubble1 at 50% of scroll speed
    bubble2.style.transform = `translateY(-${scrollTop * .5}px)`;
    fish.style.transform = `translateX(${scrollAmount}%)`;
}

window.addEventListener('scroll', function() {
     requestAnimationFrame(parallax); // call parallax() on next available screen repaint
});

window.addEventListener('resize', function() {
    var scrollAmount = (window.scrollY / (bodyHeight - windowHeight)) * 100 ; 
    fish.style.transform = `translateX(${scrollAmount}%)`;
});

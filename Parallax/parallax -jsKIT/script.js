var bubble1 = document.getElementById('bubbles1')
var bubble2 = document.getElementById('bubbles2')
var fish = document.getElementById('fish')

var bodyHeight = Math.max(document.body.scrollHeight, document.body.clientHeight); 
var windowHeight = window.innerHeight;

function parallax() {
    var scrollTop = window.pageYOffset || window.scrollY; 

    // using toFixed to avoid px values such as 24.954285124...remember that toFixed() returns a string!..so use Number() or parseInt()
    var scrollAmount = Number(((scrollTop / (bodyHeight - windowHeight)) * 100).toFixed(0)); // get amt scrolled in %

    //console.log(scrollAmount);

    //move bubble1 at 20% of scroll speed 
    bubble1.style.transform = `translateY(-${scrollTop * .2}px)`;
    // move bubble1 at 50% of scroll speed
    bubble2.style.transform = `translateY(-${scrollTop * .5}px)`;

    fish.style.transform = `translateX(${-100 + scrollAmount}%)`;
}

window.addEventListener('scroll', function() {
    requestAnimationFrame(parallax); // call parallax() on next available screen repaint
});

window.addEventListener('resize', function() {
    var scrollAmount = (scrollTop / (bodyHeight - windowHeight)) * 100 ; 
    fish.style.left = `${-100 + scrollAmount}%`; 
});


/* COMPLETE

var bubble1 = document.getElementById('bubbles1')
var bubble2 = document.getElementById('bubbles2')
var fish = document.getElementById('fish')

var bodyHeight = Math.max(document.body.scrollHeight, document.body.clientHeight); 
var windowHeight = window.innerHeight;

function parallax() {
    var scrollTop = window.pageYOffset || window.scrollY; 

    // using toFixed to avoid px values such as 24.954285124...remember that toFixed() returns a string!..so use Number() or parseInt()
    var scrollAmount = Number(((scrollTop / (bodyHeight - windowHeight)) * 100).toFixed(0)); // get amt scrolled in %

    //console.log(scrollAmount);

    //move bubble1 at 20% of scroll speed 
    bubble1.style.transform = `translateY(-${scrollTop * .2}px)`;
    // move bubble1 at 50% of scroll speed
    bubble2.style.transform = `translateY(-${scrollTop * .5}px)`;

    fish.style.transform = `translateX(${-100 + scrollAmount}%)`;
}

window.addEventListener('scroll', function() {
    requestAnimationFrame(parallax); // call parallax() on next available screen repaint
});

window.addEventListener('resize', function() {
    var scrollAmount = (scrollTop / (bodyHeight - windowHeight)) * 100 ; 
    fish.style.left = `${-100 + scrollAmount}%`; 
});

*/


/* START

var bubble1 = document.getElementById('bubbles1')
var bubble2 = document.getElementById('bubbles2')
var fish = document.getElementById('fish')


function parallaxBubbles() {
    
}

window.addEventListener('scroll', function() {
    
});

window.addEventListener('resize', function() {
    var scrollAmount = (scrollTop / (bodyHeight - windowHeight)) * 100 ; 
    fish.style.left = `${-100 + scrollAmount}%`; 
});


*/

var raf;
var isAnimating = false;
var btn = document.querySelector('#toggle');
var container = document.querySelector('#jank-container');

// Create the circles and Set the tops of each of them
function init() {
    
};

// animation loop
/* // [START forcedsync] */
function update(timestamp) {

    var movers = document.querySelectorAll('.mover');

    for (var m = 0; m < movers.length; m++) {

        

        // movers[m].style.left = ((Math.sin(m + timestamp/1000)+1) * 500) + 'px';

    }
    
}
/* // [END forcedsync] */


function toggleAnim(e) {
    
}

btn.addEventListener('click', toggleAnim);
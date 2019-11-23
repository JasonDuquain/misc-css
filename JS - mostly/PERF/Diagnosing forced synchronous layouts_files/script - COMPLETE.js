
var raf;
var isAnimating = false;
var btn = document.querySelector('#toggle');
var container = document.querySelector('#jank-container');

// Create the circles and Set the tops of each of them
function init() {
    for (var m = 1; m < 80; m++) {
        let moveDiv = document.createElement('div');
        moveDiv.classList.add('mover');
        container.append(moveDiv);
        moveDiv.style.top = (m * 20) + 'px';
    }
};

// animation loop
/* // [START forcedsync] */
function update(timestamp) {

    var movers = document.querySelectorAll('.mover');

    for (var m = 0; m < movers.length; m++) {

        /* COMMENT THIS LINE OUT TO FIX AND UNCOMMENT THE LINE BELOW IT*/
        movers[m].style.left = ((Math.sin(movers[m].offsetTop + timestamp / 1000) + 1) * 500) + 'px';

        // movers[m].style.left = ((Math.sin(m + timestamp/1000)+1) * 500) + 'px';

    }
    raf = window.requestAnimationFrame(update);
}
/* // [END forcedsync] */


function toggleAnim(e) {
    if (isAnimating) {
        window.cancelAnimationFrame(raf);
        clearTimeout(stt);
        isAnimating = false;
        e.currentTarget.innerHTML = 'Start';
    } else {
        init();
        raf = window.requestAnimationFrame(update);
        isAnimating = true;
        e.currentTarget.innerHTML = 'Stop';
    }
}

btn.addEventListener('click', toggleAnim);
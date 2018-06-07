// http://www.javascriptkit.com/javatutors/detect-user-scroll-amount.shtml

let winheight, docheight, trackLength, throttlescroll; // Cache these values, and only refresh them when the page has resized, instead of each time the page is scrolled.
let output = document.querySelector('#output');

//To get the total scrollable area of a doc, retrieve the following 2 measurements of the page:
//The height of the browser window and the height of the entire doc
//By subtracting 1 from 2, we get the total scrollable area of the doc.
function getmeasurements(){
    
}

function amountscrolled(){
    
}


// Throttle the code inside window onscroll so they are executed only once per a certain period (ie: 50 milliseconds), using setTimeout().




/* COMPLETE

let winheight, docheight, trackLength, throttlescroll; // Cache these values, and only refresh them when the page has resized, instead of each time the page is scrolled.
let output = document.querySelector('#output');

//To get the total scrollable area of a doc, retrieve the following 2 measurements of the page:
//The height of the browser window and the height of the entire doc
//By subtracting 1 from 2, we get the total scrollable area of the doc.
function getmeasurements(){
    winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    docheight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight);
    trackLength = docheight - winheight; //gets the total available scroll length of the document. The variable will contain 0 if the page is NOT scrollable.
}

function amountscrolled(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // divides the scrollTop var (amt the user has scrolled) with trackLength to derive how much the user has scrolled percentage wise..I.E..gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    output.innerHTML = `you have scrolled the page by: ${pctScrolled}%`;
}

getmeasurements();
 
window.addEventListener('resize', () => getmeasurements());

// Throttle the code inside window onscroll so they are executed only once per a certain period (ie: 50 milliseconds), using setTimeout().
window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll);
    throttlescroll = setTimeout(() => amountscrolled(), 50);
}, false);



*/
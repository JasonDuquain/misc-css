var inkbox = document.getElementById("inked-painted");
var colorbox = document.getElementById("colored");
var fillerImage = document.getElementById("inked");

inkbox.addEventListener("mousemove",trackLocation,false);
inkbox.addEventListener("touchstart",trackLocation,false);
inkbox.addEventListener("touchmove",trackLocation,false);

function trackLocation(e) {
    
}

/* COMPLETE

var inkbox = document.getElementById("inked-painted");
var colorbox = document.getElementById("colored");
var fillerImage = document.getElementById("inked");

inkbox.addEventListener("mousemove",trackLocation,false);
inkbox.addEventListener("touchstart",trackLocation,false);
inkbox.addEventListener("touchmove",trackLocation,false);

function trackLocation(e) {
    var rect = fillerImage.getBoundingClientRect();
    var position = ((e.pageX - rect.left) / fillerImage.offsetWidth)*100;
    console.log(e.pageX, 
                rect.left, 
                e.pageX - rect.left, 
                fillerImage.offsetWidth, 
                (e.pageX - rect.left) / fillerImage.offsetWidth * 100);
    if (position <= 100) { 
        colorbox.style.width = position+"%"; 
    }
}

*/
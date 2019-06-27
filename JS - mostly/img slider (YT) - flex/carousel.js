
let next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    bubblesContainer = document.querySelector('.bubbles'),
    inner = document.querySelector('.inner'),
    imgs = inner.getElementsByTagName('img'),
    currentImageIndex = 0,
    width = 640,
    bubbles = [];

for (let i = 0; i < imgs.length; i++) {
    
}

function switchImg () {
    console.log(`1st line of switchImg currentImageIndex is ${currentImageIndex}`);
    
    console.log(`after width is adjusted inner.style.left is ${inner.style.left}`);

    
}

//use a named fn so an auto slider can be used with setInterval()
next.addEventListener('click', showNext);

function showNext() {
    console.log(`1st line of showNext currentImageIndex is ${currentImageIndex}`);
    
    }
    //clearInterval(clearIt);
    console.log(`last line of showNext currentImageIndex is ${currentImageIndex} then switchImg is called`);
    
}

//same as showNext() but doesnt use clearInterval()
/*function showNextAutoSlide()  {
    currentImageIndex++;
    if (currentImageIndex >= imgs.length) {
        currentImageIndex = 0;
        inner.style.transition = 'none';
    }

    switchImg();
}*/

prev.addEventListener('click', () => {
    console.log(`1st line of prev event listener fn currentImageIndex is ${currentImageIndex}`);
    

    //clearInterval(clearIt);
    console.log(`last line of prev event listener fn currentImageIndex is ${currentImageIndex} then switchImg is called`);
    
});



//let clearIt = setInterval(showNextAutoSlide, 2222);

    
    
    
 



//try to fix later this is wonky when clicking the next and prev buttons as those are also firing the event
/*
document.querySelector('.image-carousel').addEventListener('mouseenter', function() {
    clearInterval(clearIt);
});

document.querySelector('.image-carousel').addEventListener('mouseleave', function() {
    showNextAutoSlide();
    clearIt = setInterval(showNextAutoSlide, 2222);
});

*/


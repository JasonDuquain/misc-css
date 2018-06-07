/* Cannot change this to querySelectorAll */
let carousels = Array.from(document.getElementsByClassName('image-carousel')); /*only one element but uses getElementsByClassName so it can be looped over??*/

carousels.forEach(function(c) {
    let next = c.getElementsByClassName('next')[0],
        prev = c.getElementsByClassName('prev')[0],
        bubblesContainer = c.getElementsByClassName('bubbles')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.getElementsByTagName('img'),
        currentImageIndex = 0,
        width = 640,
        bubbles = [];

    for (let i = 0; i < imgs.length; i++) {
        
    }

    function switchImg () {
        console.log(currentImageIndex);
        
        console.log(inner.style.left);
    }

    //use a named fn so an auto slider can be used with setInterval()
    next.addEventListener('click', showNext);

    function showNext() {

    }

    //same as showNext() but doesnt use clearInterval()
    function showNextAutoSlide()  {

    }

    prev.addEventListener('click', () => {

    });

    
});


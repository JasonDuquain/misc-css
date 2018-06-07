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
        let b = document.createElement('span');
        b.classList.add('bubble');
        bubblesContainer.append(b);
        bubbles.push(b);
        
        b.addEventListener('click', () => {
            currentImageIndex = i;
            switchImg();
        });
    }

    function switchImg () {
        console.log(currentImageIndex);
        inner.style.left = `${-width * currentImageIndex}px`;
        console.log(inner.style.left);
        
        if (currentImageIndex > 0 && currentImageIndex < imgs.length -1) {
           inner.style.transition = null; 
        }
        
        bubbles.forEach((el, i) => {
            (i === currentImageIndex) ? el.classList.add('active') : el.classList.remove('active');
        });
    }

    next.addEventListener('click', () => {
        currentImageIndex++;
        if (currentImageIndex >= imgs.length) {
            currentImageIndex = 0;
            inner.style.transition = 'none';
            
        }
        switchImg();
        
    });

    prev.addEventListener('click', () => {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = imgs.length -1;
            inner.style.transition = 'none';
        }
        switchImg();
    });

    switchImg();
});

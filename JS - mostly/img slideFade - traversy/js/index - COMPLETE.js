/* JS STARTS AT 16:40*/

let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    dotContainer = document.querySelector('.dotContainer'),
    dotsArr = [],
    current = 0;

for (let i = 0; i < sliderImages.length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dotContainer.append(dot);
    dotsArr.push(dot);
    
    dot.addEventListener('click', function(e) {
        console.log(`dot was clicked, 1st line in the dot evt listener: current is ${current} and i is ${i}`)
        reset();
        sliderImages[i].style.display = 'block';
        for (let i = 0; i < dotsArr.length; i++) {
            dotsArr[i].classList.remove('active');
            e.target.classList.add('active');
        }
        current = i;
         
        console.log(`dot was clicked, last line in the dot evt listener: current is ${current} and i is ${i}`)
    });
}

// Clear all images
function reset() {
    sliderImages.forEach((el) => el.style.display = 'none');
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
    dotsArr[0].classList.add('active');
}

// Show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
    console.log(`after slideLeft() current is: ${current}`);
    for (let i = 0; i < dotsArr.length; i++) {
        dotsArr[i].classList.remove('active');
    }
    dotsArr[current].classList.add('active');
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
    console.log(`after slideright() current is: ${current}`);
    for (let i = 0; i < dotsArr.length; i++) {
        dotsArr[i].classList.remove('active');
    }
    dotsArr[current].classList.add('active');
}

// Left arrow click
arrowLeft.addEventListener('click', () => {
    if (current === 0) {
        current = sliderImages.length;     
    }
    console.log(`before slideLeft() current is: ${current}`);
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', () => {
    if (current === sliderImages.length -1) {
        current = -1;
    }
    console.log(`before slideright() current is: ${current}`)
    slideRight();
});

startSlide();










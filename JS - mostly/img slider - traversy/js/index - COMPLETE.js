/* JS STARTS AT 16:40*/

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
    sliderImages.forEach((el) => el.style.display = 'none');
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// Left arrow click
arrowLeft.addEventListener('click', () => {
    if (current == 0) {
        current = sliderImages.length;
    }
    console.log(current);
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current == sliderImages.length -1) {
      current = -1;
}
    console.log(current);
    slideRight();
});

startSlide();

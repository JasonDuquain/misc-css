var slideIndex = 0;

showSlidesByClick(slideIndex);

function showSlidesByClick(n) {
    var i;
    var slides = document.querySelectorAll(".mySlides");
    var dots = document.querySelectorAll(".dot");
    
    if (n > slides.length -1) {
        slideIndex = 0;
    }
    
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach((el, idx) => {
        el.style.display = 'none';
        dots[idx].classList.remove('active');
    });
    
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
  
}

// Next Image
function plusSlides(n) {
    showSlidesByClick(slideIndex += n);
    clearInterval(clearIt);
}

// Previous Image
function currentSlide(n) {
    showSlidesByClick(slideIndex = n);
    clearInterval(clearIt);
}

// Auto Slideshow
let clearIt = setInterval(showSlides, 2000); 

function showSlides() {
    slideIndex++;
    showSlidesByClick(slideIndex);
}
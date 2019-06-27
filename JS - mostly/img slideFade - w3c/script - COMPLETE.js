let slideIndex = 0;
let slides = Array.from(document.querySelectorAll(".mySlides"));
let dotContainer = document.querySelector('.dotContainer');
let dotArr = [];

for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dotContainer.append(dot);
    dotArr.push(dot);  
    
    dot.addEventListener('click', (e) => {
        slideIndex = i;
        showSlidesByClick(i);
        //clearInterval(clearIt);
    });
}

let dots = document.querySelectorAll(".dot");

function showSlidesByClick(n) {
    console.log(`before showSlidesByClick: slideIndex: ${slideIndex}, n: ${n}`);
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
    console.log(`after showSlidesByClick: slideIndex: ${slideIndex}, n: ${n}`);
}

// Next Image
function plusSlides(n) {
    showSlidesByClick(slideIndex += n);
    //clearInterval(clearIt);
}

// Previous Image
function currentSlide(n) {
    showSlidesByClick(slideIndex = n);
    //clearInterval(clearIt);
}

// Auto Slideshow
//let clearIt = setInterval(showSlides, 2500); 

function showSlides() {
    slideIndex++;
    showSlidesByClick(slideIndex);
}

showSlidesByClick(slideIndex);


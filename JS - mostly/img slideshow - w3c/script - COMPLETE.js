
var slides = document.querySelectorAll('.mySlides');
var captionText = document.getElementById('caption');
var dotContainer = document.querySelector('.row');
var dotArr = [];
var slideIndex = 1;

for (let i = 0; i < slides.length; i++) {
    let dotImage = document.createElement('img');
    dotImage.classList.add('demo');
    let mySlidesDivChildren = Array.from(slides[i].children);
    let bigImage = mySlidesDivChildren[1];
    dotImage.setAttribute('alt', bigImage.getAttribute('alt'));
    let bigImageSrc = bigImage.getAttribute('src');
    dotImage.setAttribute('src', bigImageSrc.slice(0, bigImageSrc.length - 9) + '.jpg');
    dotImage.style.width = `${100 / slides.length}%`;
    dotContainer.append(dotImage);
    dotArr.push(dotImage);
    
    dotArr.forEach((el, idx) => el.addEventListener('click', (e) => {
        currentSlide(idx + 1);
    }));
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log(`1st line of showSlides n is ${n} and slideIndex is ${slideIndex}`);
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dotArr.length; i++) {
        dotArr[i].className = dotArr[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = 'block';
    dotArr[slideIndex - 1].className += ' active';
    captionText.textContent = dotArr[slideIndex - 1].getAttribute('alt');
    
    console.log(`last line of showSlides n is ${n} and slideIndex is ${slideIndex}`);
}




var i;
var slideIndex = 0;
var slides = Array.from(document.querySelectorAll(".mySlides"));
let dotContainer = document.querySelector('.dotContainer');
let dotArr = [];

slides.forEach((el, idx) => {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dotContainer.append(dot);
    dotArr.push(dot);
});

/* FIX: ACTIVE CLASS ON CLICKED BTN ONLY*/
dotArr.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
       slides.forEach((elem, indx) => {
           elem.style.display = 'none';
           
           if (idx === indx) {
               console.log(dotArr[idx]);
               elem.style.display = 'block';
               el.classList.remove('active')
               dotArr[idx].classList.add('active');
           }
       })
    })
})

showSlidesByClick(slideIndex);

function showSlidesByClick(n) {
    
    
    //var dots = document.querySelectorAll(".dot");
    
  
    if (n > slides.length -1) {
        slideIndex = 0;
    }
    
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach((el, idx) => {
        el.style.display = 'none';
        //dots[idx].classList.remove('active');
    });
    
    slides[slideIndex].style.display = 'block';
    //dots[slides].classList.add('active');
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
//let clearIt = setInterval(showSlides, 2000); 

function showSlides() {
    slideIndex++;
    showSlidesByClick(slideIndex);
}



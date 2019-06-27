
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

imgs[0].style.opacity = opacity;

imgs.forEach((el) => el.addEventListener('click', imgClick));

function imgClick(e) {
    imgs.forEach((el) => el.style.opacity = 1);
    current.setAttribute('src', e.target.getAttribute('src').slice(e.target.getAttribute('src'), e.target.getAttribute('src').length - 7) + '.jpg');  
    current.classList.add('fade-in');
    setTimeout(() => current.classList.remove('fade-in'), 500);
    e.target.style.opacity = opacity;
}


/* START
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;



*/

/* COMPLETE

const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

imgs[0].style.opacity = opacity;

imgs.forEach((el) => el.addEventListener('click', imgClick));

function imgClick(e) {
    imgs.forEach((el) => el.style.opacity = 1);
    current.setAttribute('src', e.target.getAttribute('src').slice(e.target.getAttribute('src'), e.target.getAttribute('src').length - 7) + '.jpg');  
    current.classList.add('fade-in');
    setTimeout(() => current.classList.remove('fade-in'), 500);
    e.target.style.opacity = opacity;
}

*/
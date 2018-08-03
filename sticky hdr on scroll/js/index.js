





































/* START


*/


/* COMPLETE

let nav = document.querySelector('nav');
let div = document.querySelector('nav div');
let banner = document.querySelector('.header-banner');
let bannerHeight = banner.scrollHeight;
let navHeight = nav.scrollHeight;

window.addEventListener('scroll', (e) => {
    if (document.documentElement.scrollTop >= bannerHeight) {
        document.body.style.paddingTop = `${navHeight}px`;
        nav.classList.add('fixed-header');
        div.classList.add('visible-title');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed-header');
        div.classList.remove('visible-title');
    }
});




*/
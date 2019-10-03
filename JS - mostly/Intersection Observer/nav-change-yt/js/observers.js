
const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;
const sectionOne = document.querySelector('.home-intro');

const sectionOneOptions = {
    
};






/* COMPLETE

const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;
const sectionOne = document.querySelector('.home-intro');

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled"); 
            document.body.style.paddingTop = headerHeight + 'px';
        } else {
            header.classList.remove("nav-scrolled"); 
            document.body.style.paddingTop = 0;
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
*/


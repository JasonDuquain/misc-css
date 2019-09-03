/****** NAV CHANGE CODE start ******/
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
/****** NAV CHANGE CODE end ******/


const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');



/* COMPLETE
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } 
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
        
    })
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});


*/



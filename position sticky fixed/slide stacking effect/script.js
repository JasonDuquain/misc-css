const sectionEls = document.querySelectorAll(".stacking-slide");

const options = {
  rootMargin: "-10% 0% -10% 0%" };


const observer = new IntersectionObserver(entries => {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-intersecting");
    } else {
      entry.target.classList.remove("is-intersecting");
    }
  });
}, options);

sectionEls.forEach(el => observer.observe(el));



/* COMPLETE

const sectionEls = document.querySelectorAll(".stacking-slide");

const options = {
  rootMargin: "-10% 0% -10% 0%" };


const observer = new IntersectionObserver(entries => {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-intersecting");
    } else {
      entry.target.classList.remove("is-intersecting");
    }
  });
}, options);

sectionEls.forEach(el => observer.observe(el));

*/

const stickyContainers = document.querySelectorAll('.sticky-container');

const options = {
	root: document.body,
    rootMargin: '0px 0px -100% 0px',
    threshold: 0
};





function callback(entries, observer) {
    
}




/* COMPLETE

const stickyContainers = document.querySelectorAll('.sticky-container');

const options = {
	root: document.body,
    rootMargin: '0px 0px -100% 0px',
    threshold: 0
};

const observer = new IntersectionObserver(callback, options);

stickyContainers.forEach(el => observer.observe(el));

function callback(entries, observer) {
    
    // from MDN: "add/remove visible, depending on test conditional, i less than 10"
    // div.classList.toggle("visible", i < 10 );
    // so in this ex we add and remove the class based on the isIntersecting property of the entry obj.
    
    entries.forEach(el => el.target.classList.toggle('active', el.isIntersecting));
}


*/
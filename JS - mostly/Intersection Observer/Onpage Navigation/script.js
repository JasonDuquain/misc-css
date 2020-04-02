
const sections = document.querySelectorAll('section');

const options = { threshold: 0.55 }

const changeNav = (entries, observer) => {
    
}

const observer = new IntersectionObserver(changeNav, options);

sections.forEach((section) => observer.observe(section));


/* COMPLETE

const sections = document.querySelectorAll('section');

const options = { threshold: 0.55 }

const changeNav = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			document.querySelector('.active').classList.remove('active');
			let id = entry.target.getAttribute('id');
			let newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
		}
	});
}

const observer = new IntersectionObserver(changeNav, options);

sections.forEach((section) => observer.observe(section));

*/

const sections = document.querySelectorAll('section');

const options = {
	threshold: 0.55
}

const changeNav = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.active').classList.remove('active');
            var id = entry.target.getAttribute('id');
            var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
        }
    })
}

const observer = new IntersectionObserver(changeNav, options);

sections.forEach((section) => {
	observer.observe(section);
});


/* COMPLETE

const sections = document.querySelectorAll('section');

const options = {
	threshold: 0.55
}

const changeNav = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			document.querySelector('.active').classList.remove('active');
			var id = entry.target.getAttribute('id');
			var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
		}
	});
}

const observer = new IntersectionObserver(changeNav, options);

sections.forEach((section) => {
	observer.observe(section);
});


*/
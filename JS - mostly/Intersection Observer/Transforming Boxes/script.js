const boxes = document.querySelectorAll('.box');

const scrollImations = (entries, observer) => {
  
}

const options = { threshold: 1.0 }






/* COMPLETE - dont change the order!!

const boxes = document.querySelectorAll('.box');

const scrollImations = (entries, observer) => {
	entries.forEach((entry) => {
		// only do animation if the element is fully on screen
		(entry.isIntersecting && entry.intersectionRatio == 1) ?
			entry.target.classList.add('box--visible') :
			entry.target.classList.remove('box--visible');
	});
}

const options = {
	threshold: 1.0,
};

const observer = new IntersectionObserver(scrollImations, options);

boxes.forEach((box) => {
	observer.observe(box);
});

*/
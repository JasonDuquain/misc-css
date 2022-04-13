/* START AT 6:00 */



/* COMPLETE

gsap.set(".box", {
	x: (index) => index * 60,
	y: gsap.utils.distribute({
		base: 0,
		amount: 120,
		from: "center"
	}),
	textContent: (index, target, targets) => targets.length - index,
	zIndex: (index, target, targets) => {
		let half = Math.floor(targets.length / 2);
		if (index < half) {
			return targets.length - index;
		}
	}
})

*/
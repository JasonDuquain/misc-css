const items = gsap.utils.toArray(".item");

// all of these are at the end of the HTML
const details = document.querySelector('.detail'); // visibility:hidden at beginning
const detailContent = document.querySelector('.content');
const detailImage = document.querySelector('.detail img');
const detailTitle = document.querySelector('.detail .title');
const detailSecondary = document.querySelector('.detail .secondary');
const detailDescription = document.querySelector('.detail .description');

let activeItem; // keeps track of which item is open (details)

gsap.set(detailContent, { yPercent: -100 }); // close the details "drawer" (content) initially

function showDetails(item) {
	if (activeItem) { // someone could click on an element behind the open details panel in which case we should just close it.
		return hideDetails();
	}
	let onLoad = () => {

		// position the details on top of the item (scaled down)
		Flip.fit(details, item, {scale: true, fitChild: detailImage});

		// record the state
		const state = Flip.getState(details);

		// set the final state
		gsap.set(details, {clearProps: true}); // wipe out all inline stuff so it's in the native state (not scaled)
		gsap.set(details, {xPercent: -50, top: "50%", yPercent: -50, visibility: "visible", overflow: "hidden"});

		Flip.from(state, {
			duration: 0.5,
			ease: "power2.inOut",
			scale: true,
			onComplete: () => gsap.set(details, {overflow: "auto"}) // to permit scrolling if necessary
		})
			// Flip.from() returns a timeline, so add a tween to reveal the detail content. That way, if the flip gets interrupted and forced to completion & killed, this does too.
			.to(detailContent, {yPercent: 0}, 0.2);

		detailImage.removeEventListener("load", onLoad);
		document.addEventListener('click', hideDetails);
	};

	// this is outside onLoad fn but inside showDetails fn..Change image and text
	const data = item.dataset;
	detailImage.addEventListener("load", onLoad);
	detailImage.src = item.querySelector('img').src;
	detailTitle.innerText = data.title;
	detailSecondary.innerText = data.secondary;
	detailDescription.innerText = data.text;

	// stagger-fade the items out from the one that was selected in a staggered way (and kill the tween of the selected item)
	gsap.to(items, {opacity: 0.3, stagger: { amount: 0.7, from: items.indexOf(item), grid: "auto"}}).kill(item);
	gsap.to(".app", {backgroundColor: "#888", duration: 1, delay: 0.3}); // fade out the bg
	activeItem = item;
}

function hideDetails() {
	document.removeEventListener('click', hideDetails);
	gsap.set(details, {overflow: "hidden"});

	// record the current state of details
	const state = Flip.getState(details);

	// scale details down so that its detailImage fits exactly on top of activeItem
	Flip.fit(details, activeItem, {scale: true, fitChild: detailImage});

	// animate the other elements, like fade all items back up to full opacity, slide the detailContent away, and tween the bg color to white.
	const tl = gsap.timeline();
	tl.set(details, {overflow: "hidden"})
    .to(detailContent, {yPercent: -100})
	  .to(items, {opacity: 1, stagger: {amount: 0.7, from: items.indexOf(activeItem), grid: "auto"}})
	  .to(".app", {backgroundColor: "#fff"}, "<");

	// animate from the original state to the current one.
	Flip.from(state, {
		scale: true,
		duration: 0.5,
		delay: 0.2, // 0.2 sec because we want the details to slide up first, then flip.
		onInterrupt: () => tl.kill()
	})
	  .set(details, {visibility: "hidden"});

	activeItem = null;
}

// Add click listeners
gsap.utils.toArray('.item').forEach(item => item.addEventListener('click', () => showDetails(item)));

// Intro animation
window.addEventListener('load', () => {
	gsap.to('.app', { autoAlpha: 1, duration: 0.2 });
	gsap.from('.item', {autoAlpha: 0, yPercent: 30, stagger: 0.04});
});
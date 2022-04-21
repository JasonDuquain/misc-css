/* start pt1 at 5:30 --- start pt2 at 1:00 */


gsap.registerPlugin(GSDevTools, SplitText)

const split = new SplitText("h1", { type: "words" })
const tl = gsap.timeline()

function init() {
	gsap.set(".fullScreen", { autoAlpha: 1 })
	tl.from(split.words, { yPercent: 80, stagger: 0.5 })
	
	GSDevTools.create({ animation: tl })
}

let timeout = false; // holder for timeout id
let delay = 250; // delay after event is "complete" to run cb

window.addEventListener('resize', function() {
	
})

window.addEventListener("load", init);


/* START

gsap.registerPlugin(GSDevTools, SplitText)

const split = new SplitText("h1", { type: "words" })
const tl = gsap.timeline()

function init() {
	gsap.set(".fullScreen", { autoAlpha: 1 })
	tl.from(split.words, { yPercent: 80, stagger: 0.5 })
	
	GSDevTools.create({ animation: tl })
}

let timeout = false; // holder for timeout id
let delay = 250; // delay after event is "complete" to run cb

window.addEventListener('resize', function() {
	
})

window.addEventListener("load", init);

*/


/* COMPLETE

gsap.registerPlugin(GSDevTools, SplitText)

let split;
let tl;

function init() {
	gsap.set(".fullScreen", { autoAlpha:1 });

	if (split) {
		GSDevTools.getById("tools").kill();
		split.revert();
	}

	split = new SplitText("h1", { linesClass: "lines", charsClass: "chars" })

	tl = gsap.timeline();
	
	split.lines.forEach((line, index) => {
		tl.from(line.querySelectorAll(".chars"), { yPercent: 80, stagger: 0.1, duration: 0.3 }, ">-50%")
	});
	
	GSDevTools.create({ animation: tl, id: "tools" })
}

let timeout = false;
let delay = 250;

window.addEventListener('resize', function() {
	gsap.set(".fullScreen", { autoAlpha: 0 })
	this.clearTimeout(timeout);
	timeout = setTimeout(init, delay)
})

window.addEventListener("load", init);

*/
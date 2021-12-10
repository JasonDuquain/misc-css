var pixelsPerSecond = 200;

var animation = gsap.timeline()
.to('#star', { duration: 1, x: 1150 })
.to('#circle', { duration: 1, x: 1150 })
.to('#square', { duration: 1, x: 1150 })

animation.eventCallback("onUpdate", movePlayhead).paused(true);
gsap.to('svg', { autoAlpha: 1 })
var time = document.getElementById('time');
var maxX = animation.duration() * pixelsPerSecond;


var dragger = Draggable.create("#playhead", { // the pink pill shaped draggable thing
	type:"x", 
	cursor:"pointer",
	trigger:"#timeline", // the group <g> that wraps all the timeline items
	bounds: { minX:0, maxX:maxX },
	onDrag: function() {
		animation.pause();
		time.textContent = animation.time().toFixed(1);
		animation.progress(this.x/maxX);
	}
});

function movePlayhead() {  
	gsap.set("#playhead", { x:animation.progress() * maxX });
	time.textContent = animation.time().toFixed(1);	
}

document.getElementById("play").addEventListener("click", () => animation.play())
document.getElementById("pause").addEventListener("click", () => animation.pause())
document.getElementById("reverse").addEventListener("click", () => animation.reverse())


/* COMPLETE
var pixelsPerSecond = 200;

var animation = gsap.timeline()
.to('#star', { duration: 2, x: 1150 })
.to('#circle', { duration: 1, x: 1150 })
.to('#square', { duration: 3, x: 1150 }, "<")

animation.eventCallback("onUpdate", movePlayhead).paused(true);
gsap.to('svg', { autoAlpha: 1 })
var time = document.getElementById('time');
var maxX = animation.duration() * pixelsPerSecond;

var children = animation.getChildren();
var numChildren = children.length;

for (let i = 0; i < numChildren; i++) {
	// tween0, tween1 and tween2 are the <g>s the wrap the small shapes, "tween" text and the aqua rect
	gsap.set("#tween" + i, { x: children[i].startTime() * pixelsPerSecond })

	// the aqua rects have ID's of rect0, rect1 and rect2
	gsap.set("#rect" + i, { width: children[i].duration() * pixelsPerSecond })
}

var dragger = Draggable.create("#playhead", { // the pink pill shaped draggable thing
	type:"x", 
	cursor:"pointer",
	trigger:"#timeline", // the group <g> that wraps all the timeline items
	bounds: { minX:0, maxX:maxX },
	onDrag: function() {
		animation.pause();
		time.textContent = animation.time().toFixed(1);
		animation.progress(this.x/maxX);
	}
});

function movePlayhead() { 
	gsap.set("#playhead", { x:animation.progress() * maxX} );
	time.textContent = animation.time().toFixed(1);	
}

document.getElementById("play").addEventListener("click", () => animation.play())
document.getElementById("pause").addEventListener("click", () => animation.pause())
document.getElementById("reverse").addEventListener("click", () => animation.reverse())

*/


/* START

var pixelsPerSecond = 200;

var animation = gsap.timeline()
.to('#star', { duration: 1, x: 1150 })
.to('#circle', { duration: 1, x: 1150 })
.to('#square', { duration: 1, x: 1150 })

animation.eventCallback("onUpdate", movePlayhead).paused(true);
gsap.to('svg', { autoAlpha: 1 })
var time = document.getElementById('time');
var maxX = animation.duration() * pixelsPerSecond;


var dragger = Draggable.create("#playhead", { // the pink pill shaped draggable thing
	type:"x", 
	cursor:"pointer",
	trigger:"#timeline", // the group <g> that wraps all the timeline items
	bounds: { minX:0, maxX:maxX },
	onDrag: function() {
		animation.pause();
		time.textContent = animation.time().toFixed(1);
		animation.progress(this.x/maxX);
	}
});

function movePlayhead() {  
	gsap.set("#playhead", { x:animation.progress() * maxX });
	time.textContent = animation.time().toFixed(1);	
}

document.getElementById("play").addEventListener("click", () => animation.play())
document.getElementById("pause").addEventListener("click", () => animation.pause())
document.getElementById("reverse").addEventListener("click", () => animation.reverse())

*/
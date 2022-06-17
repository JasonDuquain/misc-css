let scaleAndReveal = true
let svgNS = "http://www.w3.org/2000/svg"
let ballGroup = document.querySelector("#ballGroup"); //the <g> around the pink ball
let ball = document.querySelector("#ball") // the pink ball <circle>
let dots = []

let easePath = "M0,400 C40.972,337.178 17.709,328.19 99.576,271.795 166.341,213.79 146.735,115.835 243.836,24.002 261.72,8.662 294.113,1.857 304.415,1.897 349.939,2.072 365.7955,0.95635 398.488,1.504"
	 
CustomEase.create("myEase", easePath)

// all 5 balls are laid out right in the middle of the pink ball
function buildBurst() {
	for(var i = 0; i < 5; i++){
		let dotGroup = document.createElementNS(svgNS, "g");
		let dot = document.createElementNS(svgNS, "circle");
		dotGroup.appendChild(dot)
		ballGroup.appendChild(dotGroup)
		dot.setAttribute('cx', ball.getAttribute("cx"));
  	dot.setAttribute('cy', ball.getAttribute("cy"));
  	dot.setAttribute('r', 4);
		dot.setAttribute('fill', "white")
		gsap.set(dotGroup, {rotation:(360/5) * i, transformOrigin:"50% 50%"})
		dots.push(dot)
	}
	ballGroup.appendChild(ball)
}
buildBurst();

let motionAni = gsap.timeline()
.to("#ballGroup", {
	duration: 3,
	motionPath: {
		path: "#motionGuide",
		align: "#motionGuide",
		alignOrigin: [0.5, 0.5]
	},
	ease: "myEase"
})

let burstAni = gsap.timeline()
.to(dots, {
	x:40, 
	scale:1.8, 
	ease:"power1.in", 
	repeat:1, 
	yoyo:true, 
	yoyoEase:"power1.in",
	duration:0.6 
})
.to(ballGroup, { 
	rotation: 420, duration: 1.8, ease: "power2" 
}, 0)
 
let master = gsap.timeline({repeat:-1})
  .from("#visiblePath", { drawSVG: "0% 0%", duration: 3 }) /* fix */
  .add(motionAni.tweenTo(2.2, {repeat:1, yoyo:true}), 3)
	.add(burstAni, 1.4)

	.from("#motion path", {opacity:0, stagger:0.1, duration:2}, 0)
	.from("#study path", {opacity:0, stagger:0.1, duration:2}, ">-1.4")

	/***  using drawSVG (update CSS if so) ****/
	//.from("#motion path", {drawSVG: "0% 0%", stagger: 0.1, duration:2}, 0)
	//.from("#study path", {drawSVG: "0% 0%", stagger: 0.1, duration:2}, ">-1.4")

	if (scaleAndReveal) {
		master.from("#titlePathGroup", {duration:6, scale:0.6, transformOrigin:"50% 50%"}, 0)
   	master.to("#titlePathGroup", {opacity:0, duration:0.8}, "-=3")
	} else {
   	master.to("#titlePathGroup", {opacity:0, duration:0.5}, "-=1")
	}

// window.addEventListener("click", () => { master.restart() })


/* START

let scaleAndReveal = true
let svgNS = "http://www.w3.org/2000/svg"
let ballGroup = document.querySelector("#ballGroup"); //the <g> around the pink ball
let ball = document.querySelector("#ball") // the pink ball <circle>
let dots = []

let easePath = "M0,400 C40.972,337.178 17.709,328.19 99.576,271.795 166.341,213.79 146.735,115.835 243.836,24.002 261.72,8.662 294.113,1.857 304.415,1.897 349.939,2.072 365.7955,0.95635 398.488,1.504"
	 
CustomEase.create("myEase", easePath)

// all 5 balls are laid out right in the middle of the pink ball
function buildBurst() {
	for (var i = 0; i < 5; i++) {
		let dotGroup = document.createElementNS(svgNS, "g");
		let dot = document.createElementNS(svgNS, "circle");
		dotGroup.appendChild(dot)
		ballGroup.appendChild(dotGroup)
		dot.setAttribute('cx', ball.getAttribute("cx"));
  		dot.setAttribute('cy', ball.getAttribute("cy"));
  		dot.setAttribute('r', 4);
		dot.setAttribute('fill', "white")
		gsap.set(dotGroup, {rotation:(360/5) * i, transformOrigin:"50% 50%"})
		dots.push(dot)	
	}
	ballGroup.appendChild(ball)
}

buildBurst();

let motionAni = null

let burstAni = null

let master = null

// window.addEventListener("click", () => { master.restart() })

*/
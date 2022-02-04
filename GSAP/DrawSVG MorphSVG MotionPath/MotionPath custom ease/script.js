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

let motionAni = null

let burstAni = null

let master = null

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

let motionAni = null

let burstAni = null

let master = null

// window.addEventListener("click", () => { master.restart() })

*/
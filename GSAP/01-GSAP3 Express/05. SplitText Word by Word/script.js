gsap.registerPlugin(GSDevTools, SplitText)
let split
let animation = gsap.timeline({})


function init() {
	split = new SplitText("h1", { type: "words" })
  gsap.set(".wrapper", { autoAlpha: 1 })
  
	GSDevTools.create({ animation: animation })
  
}


window.addEventListener("load", function(event) { 
  init() 
});


/* START

gsap.registerPlugin(GSDevTools, SplitText)
let split
let animation = gsap.timeline({})


function init() {
	split = new SplitText("h1", { type: "words" })
  gsap.set(".wrapper", { autoAlpha: 1 })
  
	GSDevTools.create({ animation: animation })
  
}


window.addEventListener("load", function(event) { 
  init() 
});

*/
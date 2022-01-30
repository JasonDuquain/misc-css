
const bar = document.querySelector(".bar")
const tl = gsap.timeline({defaults:{duration:1}})

gsap.set(bar, {scaleX:0, transformOrigin:"left top"})
tl.to(bar, {scaleX:"+=0.2"})
  
  .to(bar, {scaleX:"+=0.2"})
  
  .to(bar, {scaleX:"+=0.2"})
  
  .to(bar, {scaleX:"+=0.2"})
  
  .to(bar, {scaleX:"+=0.2"})


function animate(index) {
	
}

next.addEventListener("click", ()=> tl.play())
prev.addEventListener("click", ()=> tl.reverse())

GSDevTools.create({animation:tl})


/* START

const bar = document.querySelector(".bar")
const tl = gsap.timeline({defaults:{duration:1}})

gsap.set(bar, {scaleX:0, transformOrigin:"left top"})
tl.to(bar, {scaleX:"+=0.2"})
  
  .to(bar, {scaleX:"+=0.2"})
  
  .to(bar, {scaleX:"+=0.2"})
  
  .to(bar, {scaleX:"+=0.2"})
  
  .to(bar, {scaleX:"+=0.2"})


function animate(index) {
	
}

next.addEventListener("click", ()=> tl.play())
prev.addEventListener("click", ()=> tl.reverse())

GSDevTools.create({animation:tl})

*/


/* COMPLETE - part 1

const bar = document.querySelector(".bar")
const tl = gsap.timeline({defaults:{duration:1}})

gsap.set(bar, {scaleX:0, transformOrigin:"left top"})
tl.to(bar, {scaleX:"+=0.2"})
  .set(".circle1", { scale: 2, backgroundColor: "#f06" })
  .to(bar, {scaleX:"+=0.2"})
  .set(".circle2", { scale: 2, backgroundColor: "#f06" })
  .to(bar, {scaleX:"+=0.2"})
  .set(".circle3", { scale: 2, backgroundColor: "#f06" })
  .to(bar, {scaleX:"+=0.2"})
  .set(".circle4", { scale: 2, backgroundColor: "#f06" })
  .to(bar, {scaleX:"+=0.2"})
  .set(".circle5", { scale: 2, backgroundColor: "#f06" })

//the above timeline could be made with a loop
//but this is easier to explain

next.addEventListener("click", ()=> tl.play())
prev.addEventListener("click", ()=> tl.reverse())

GSDevTools.create({animation:tl})

*/


/* COMPLETE - part 2

const bar = document.querySelector(".bar")
const tl = gsap.timeline({defaults:{duration:1}})

gsap.set(bar, {scaleX:0, transformOrigin:"left top"})
tl.to(bar, {scaleX:"+=0.2"}) 
	.addPause("+=0", animate, [1])
  .to(bar, {scaleX:"+=0.2"})
  .addPause("+=0", animate, [2])
  .to(bar, {scaleX:"+=0.2"}) 
  .addPause("+=0", animate, [3])
  .to(bar, {scaleX:"+=0.2"})
  .addPause("+=0", animate, [4])
  .to(bar, {scaleX:"+=0.2"})
  .addPause("+=0", animate, [5])

function animate(index) {
	gsap.to(`.circle:nth-child(${index + 1}) div`, { backgroundColor: "#f09", scale: 1.5, repeat: 1, yoyo: true, duration: 0.2 })
}
//the above timeline could be made with a loop but this is easier to explain

next.addEventListener("click", ()=> tl.play())
prev.addEventListener("click", ()=> tl.reverse())

GSDevTools.create({animation:tl})

*/
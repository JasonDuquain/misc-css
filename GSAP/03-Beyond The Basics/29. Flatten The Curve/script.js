const tl = gsap.timeline()
const img = document.querySelector("img")
const headings = document.querySelector("h2")
const word1 = document.querySelector(".word1")
const word2 = document.querySelector(".word2")
	
   
//GSDevTools.create()


/* COMPLETE 

const master = gsap.timeline({ repeat: 2, repeatDelay: 1 });

function animatePanel(panel) {
  
  const img = document.querySelector(panel + " img")
  const headings = document.querySelector(panel + " h2")
  const word1 = document.querySelector(panel + " .word1")
  const word2 = document.querySelector(panel + " .word2")
  
  const tl = gsap.timeline()
  
  tl.set(panel, { left: 0 })
  
  tl.from(img, { x: -150, scale: 0.5, ease: 'power1.in' })
  .from(img, { y: 50, ease: 'power1' }, "<")
  .from(img, { opacity: 0, duration: 0.2 }, "<")

  .from(word1, { x: -80 }, "-=0.25")
  .from(word2, { x: 80 }, "<")
  .from(headings, { opacity: 0, duration: 0.2 }, "<")

  .to(img, { x: 150, scale: 0.5, ease: 'power1' }, "+=0.5")
  .to(img, { y: 80, ease: 'power1.in' }, "<")

  .to(headings, { y: 20, opacity: 0, duration: 0.2, ease: 'power1.in' }, "<")
  .to(img, { opacity: 0, duration: 0.2 }, "-=0.2")
  
  return tl;
}

const curve = gsap.timeline()
  .set('.panel4', { left: 0 })
  .from('.panel4', { opacity: 0, duration: 0.2 })
  .from('.panel4 h2', { y: -134, ease: 'power1.in', duration: 0.2 })
  .to('#curveTall', { attr: { d: 'M49.16 192.62h203.06c-37.09-.62-49.44-48.15-102.22-48.11-55.26.05-82.24 48.11-100.84 48.11z' }, duration: 0.1, ease: 'power1.in' }, "-=0.1")

master.add(animatePanel('.panel1'))
      .add(animatePanel('.panel2'), "-=0.5")
      .add(animatePanel('.panel3'), "-=0.5")
      .add(curve)


//GSDevTools.create()

*/


/* START

const tl = gsap.timeline()
const img = document.querySelector("img")
const headings = document.querySelector("h2")
const word1 = document.querySelector(".word1")
const word2 = document.querySelector(".word2")
	
   
//GSDevTools.create()

*/
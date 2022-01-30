gsap.set(".banner", { autoAlpha: 1 })
const tl = gsap.timeline({ repeat: 1, repeatDelay: 0.3 })
let count = 0;
const maxPlays = 2;

tl.from("h1", {opacity:0})
  .from(".item", {opacity:0, scale:0.5, stagger:0.2})
  .from(".footer", {width:0}, "+=0.3")
 
  
function checkCount() {
  
}

  
GSDevTools.create({animation:tl});

/* COMPLETE

gsap.set(".banner", {autoAlpha:1})
const tl = gsap.timeline({})
const maxPlays = 3;

tl.from("h1", {opacity:0})
  .from(".item", {opacity:0, scale:0.5, stagger:0.2})
  .from(".footer", {width:0}, "+=0.3")
  .add("resolve")
  .to("h1, .item, .footer", { opacity: 0, stagger: 0.1 })
  .add("end")

const master = gsap.timeline()  
.add(tl.tweenTo("end", { repeat: maxPlays - 2 }))
.add(tl.tweenFromTo(0, "resolve"))
.to(".footer", { backgroundColor: "green", repeat: 4, yoyo: true, duration: 0.5 })

GSDevTools.create({animation:master});

*/

/* START

gsap.set(".banner", { autoAlpha: 1 })
const tl = gsap.timeline({ repeat: 1, repeatDelay: 0.3 })
let count = 0;
const maxPlays = 2;

tl.from("h1", {opacity:0})
  .from(".item", {opacity:0, scale:0.5, stagger:0.2})
  .from(".footer", {width:0}, "+=0.3")
 
  
function checkCount() {
  
}

  
GSDevTools.create({animation:tl});

*/
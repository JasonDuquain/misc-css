gsap.registerPlugin(GSDevTools, TextPlugin)

const blue = document.querySelector(".blue")
const pink = document.querySelector(".pink")
const yellow = document.querySelector(".yellow")
const herman = document.querySelector(".herman")
const quote = document.querySelector(".quote")

gsap.set([herman, quote], {y:80})

const tl = gsap.timeline()

tl.to(blue, {scale:2})
  .to(blue, {rotation:360})
  .to(blue, {scale:1})

  .set(quote, {text:"isn't that special"}) 
  .to([herman, quote], {y:0, stagger:0.1, repeat:1, yoyo:true, repeatDelay:0.5})

  .to(pink, {y:-50})
  .to(pink, {rotation:360})
  .to(pink, {y:0})
   
  .set(quote, {text:"nice job"}) 
  .to([herman, quote], {y:0, stagger:0.1, repeat:1, yoyo:true, repeatDelay:0.5})

  .to(yellow, {scale:0.5})
  .to(yellow, {rotation:360})
  .to(yellow, {scale:1})

  .set(quote, {text:"look at you!"}) 
  .to([herman, quote], {y:0, stagger:0.1, repeat:1, yoyo:true, repeatDelay:0.5})


GSDevTools.create({animation:tl})
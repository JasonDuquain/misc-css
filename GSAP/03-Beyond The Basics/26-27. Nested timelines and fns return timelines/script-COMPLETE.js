gsap.registerPlugin(GSDevTools, TextPlugin)

const blue = document.querySelector(".blue")
const pink = document.querySelector(".pink")
const yellow = document.querySelector(".yellow")
const herman = document.querySelector(".herman")
const quote = document.querySelector(".quote")

gsap.set([herman, quote], {y:80})

const master = gsap.timeline()

const blueAni = gsap.timeline()
  .to(blue, {scale:2})
  .to(blue, {rotation:360})
  .to(blue, {scale:1})

const pinkAni = gsap.timeline()
  .to(pink, {y:-50})
  .to(pink, {rotation:360})
  .to(pink, {y:0})

const yellowAni = gsap.timeline()
  .to(yellow, {scale:0.5})
  .to(yellow, {rotation:360})
  .to(yellow, {scale:1})

function hermanAni(message) {
	let tl = gsap.timeline()
	.set(quote, { text: message })
	.to([herman, quote], { y: 0, stagger: 0.1, repeat: 1, yoyo: true, repeatDelay: 0.5 })
	return tl;
}

master.add(blueAni)
	.add(hermanAni('hay'))
	.add(pinkAni)
	.add(hermanAni('you'))
	.add(yellowAni)
	.add(hermanAni('wait'))

GSDevTools.create({animation:master})

/* adding scrub: true also causes the car to go backwards when scrolling up */

let width = window.innerWidth
let speed = 350 //pixels per second
let endX = width  - 500

let circumference = document.querySelector("#wheel1").getBBox().width * Math.PI
let rotation = (endX / circumference) * 360
let duration = endX / speed
let ease = "sine.inOut"

let tl = gsap.timeline({scrollTrigger: {
  trigger: '.carWrapper',
  start: 'top 50%',
  end: 'bottom 50%',
  markers: true,
  scrub: 1,
  pin: true
}})
.to("svg", {duration:duration, x:endX, ease:ease})
.to("#wheel1, #wheel2", {duration:duration, rotation:rotation, transformOrigin:"50% 50%", ease:ease}, 0)

/* COMPLETE 
let width = window.innerWidth
let speed = 350 //pixels per second
let endX = width  - 500

let circumference = document.querySelector("#wheel1").getBBox().width * Math.PI
let rotation = (endX / circumference) * 360
let duration = endX / speed
let ease = "sine.inOut"

let tl = gsap.timeline({scrollTrigger: {
  trigger: '.carWrapper',
  start: 'top 50%',
  end: 'bottom 50%',
  markers: true,
  scrub: 1,
  pin: true
}})
.to("svg", {duration:duration, x:endX, ease:ease})
.to("#wheel1, #wheel2", {duration:duration, rotation:rotation, transformOrigin:"50% 50%", ease:ease}, 0)

*/

/* START
let width = window.innerWidth
let speed = 350 //pixels per second
let endX = width  - 500

let circumference = document.querySelector("#wheel1").getBBox().width * Math.PI
let rotation = (endX / circumference) * 360
let duration = endX / speed
let ease = "sine.inOut"

let tl = gsap.timeline({})

.to("svg", {duration:duration, x:endX, ease:ease})
.to("#wheel1, #wheel2", {duration:duration, rotation:rotation, transformOrigin:"50% 50%", ease:ease}, 0)
*/


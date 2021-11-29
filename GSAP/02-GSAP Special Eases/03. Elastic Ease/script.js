//https://www.gradientmagic.com/collection/simpleangular
const chars = new SplitText("p", {type:"chars"})
let animation = gsap.timeline()

//gsap.set(chars.chars, {clearProps:"y,opacity"})



// elastic(amplitude,frequency)
// amplitude === affects the str of the overshoot
// frequency === affcts hows many wiggles. smaller # creates MORE wiggles



/* COMPLETE

animation.from(chars.chars, { y:100,  duration:2, stagger: { each: 0.03, from: 'start'}, ease:"elastic(2,0.4)"} )
animation.from(chars.chars, {opacity:0, duration:0.2, stagger:0.03}, 0)

*/
/* disable pin-spacer css bg style at start of demo..pin-spacer stays where .box used to be */

/*gsap.to('.box', { 
  x: 300, 
  duration: 10,
  scrollTrigger: {
     trigger: ".box",
     start: "top 300px",
     end: "+=300",
     markers: true,
    pin: true
   }
})
*/

 // as soon as pinning ends the box will have a translate3d(0px, 300px, 0px)
ScrollTrigger.create({
		trigger:".box",
		start:"top 300px",
		end:"+=300", // end after scrolling 300px beyond the 'start'..same as end:"top+=300px 300px",
		markers:true,
    pin: true
})
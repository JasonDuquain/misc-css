/*
How does pinning work under the hood?

-The pinned element gets immediately wrapped in a <div> with a fixed width/height to match. A class of "pin-spacer" is added to that wrapper. Think of it like a proxy element that props open the space where the pinned element was in the DOM so that when it flips to position: fixed things don't collapse.

-By default, padding will be added to the bottom (or right for horizontal: true) of the pin-spacer so that [in most cases] things get pushed further down/right. When the pinned element gets unpinned, the content below/right will have caught up. So if, for example, the pinned element stays pinned for 300px, there would be padding of 300px added.

-When the ScrollTrigger is active (when the scroll position is between the start and end), it sets the pinned element to position: fixed and positions it with fixed top/left/width/height values...unless the scroller isn't the viewport in which case it never uses position: fixed because that'd break sub-scrolling, so it uses pure transforms. If pinReparent is set to true (we recommend avoiding that if you can), the pinned element will get reparented to the <body> and styles will be moved inline to ensure appearance is maintained. 
*/

/* disable pin-spacer css bg style at start of demo..pin-spacer stays where .box used to be */

gsap.to('.box', { 
  x: 300, 
  duration: 10,
  scrollTrigger: {
     trigger: ".box",
     start: "top 300px",
     end: "+=300",
     markers: true
   }
})

 // as soon as pinning ends the box will have a translate3d(0px, 300px, 0px)
// ScrollTrigger.create({
// 		trigger:".box",
// 		start:"top 300px",
// 		end:"+=300", // end after scrolling 300px beyond the 'start'..same as end:"top+=300px 300px",
// 		markers:true,
//     pin: true
// })
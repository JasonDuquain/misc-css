// gsap.set("body", { scale: 0.3, transformOrigin: "left top" })

const sections = gsap.utils.toArray(".cols-2")

sections.forEach((element, index) => {
  let items = element.querySelectorAll(".item")
  let distance = (index %2 == 0) ? -100 : 100;

  let tl = gsap.timeline()

});


/* for part 3

ScrollTrigger.matchMedia({
	
	// desktop
	"(min-width: 601px)": function() {
		
  }, 
  
	// mobile
	"(max-width: 600px)": function() {

  }
});

*/

/* at 11:35 of part 3 it is tricky to try and past the code for the mobile sect so just overwirte evertying in the js file with this:

const sections = gsap.utils.toArray(".cols-2")

ScrollTrigger.saveStyles(".item");

ScrollTrigger.matchMedia({
	
	// desktop
	"(min-width: 601px)": function() {
		sections.forEach((element, index) => {
      let items = element.querySelectorAll(".item")
      let distance = (index %2 == 0) ? -100 : 100;
    
      let tl = gsap.timeline({paused: true})
      .from(items, { xPercent: gsap.utils.wrap([distance, -distance]), duration: 0.5 })
    
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        markers: true,
        onEnter: () => tl.play()
      })
    
      ScrollTrigger.create({
        trigger: element,
        start: "top 100%",
        markers: true,
        onLeaveBack: () => tl.pause(0)
      })
    
    });
  }, 
  
	// mobile
	"(max-width: 600px)": function() {
    gsap.utils.toArray(".item").forEach((element, index) => {
     
      let target = element.querySelector("div")
      
      let tl = gsap.timeline({paused:true})

      tl.from(target, {duration:0.5, opacity:0, scale:0.8})
      
      ScrollTrigger.create({
        trigger:element,
        start:"top 90%",
        onEnter: ()=> tl.play()
      })
          
      ScrollTrigger.create({
        trigger:element,
        start:"top 100%",
        onLeaveBack: ()=> tl.pause(0)
      })
                 
    })
  }
  
});

  */
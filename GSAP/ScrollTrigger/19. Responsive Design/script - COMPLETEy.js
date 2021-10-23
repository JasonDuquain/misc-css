const sections = gsap.utils.toArray(".cols-2")

sections.forEach((element, index) => {
  let items = element.querySelectorAll(".item")
  let distance = (index %2 == 0) ? 100 : -100
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:element,
      start:"top 80%",
      toggleActions:"restart none none reverse",
    }
  })
  
  tl.from(items, {duration:0.5, xPercent:gsap.utils.wrap([-distance, distance])})
  tl.from(items, {opacity:0, duration:0.3}, 0)  
})
const sections = gsap.utils.toArray(".cols-2")

sections.forEach((element, index) => {
  let items = element.querySelectorAll(".item")
  let distance = (index %2 == 0) ? 100 : -100;

});
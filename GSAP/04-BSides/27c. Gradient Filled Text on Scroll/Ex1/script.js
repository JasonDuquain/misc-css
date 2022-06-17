let headings = gsap.utils.toArray("h1");

headings.forEach(function (element, index) {
  gsap.to(element, {
    backgroundImage: "linear-gradient(#f60 100%, #ff0 200%, #f60 300%)",
    duration: 2,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top 50%",
      end: "+=150px",
      scrub: true,
      markers: true
    }
  });
});

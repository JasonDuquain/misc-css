
gsap.utils.toArray("section").forEach((section, i) => {
  let bg = section.querySelector("div.bg"); 
  
});

/* COMPLETE

gsap.utils.toArray("section").forEach((section, i) => {
  let bg = section.querySelector("div.bg"); 
  bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

  if (i) {
    bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
    gsap.to(bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    })
  } else {
    bg.style.backgroundPosition = "50% 0px";
    gsap.to(bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
  }
});

*/
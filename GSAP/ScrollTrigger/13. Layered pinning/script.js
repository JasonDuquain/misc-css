gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing:false,
     markers:{startColor:"white", endColor:"white"}
  });
});

/* START
gsap.registerPlugin(ScrollTrigger);

*/

/* COMPLETE

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing:false,
     markers:{startColor:"white", endColor:"white"}
  });
});

*/
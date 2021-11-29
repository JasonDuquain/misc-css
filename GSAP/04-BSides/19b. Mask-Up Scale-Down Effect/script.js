const tl = gsap.timeline()
.from(".bus", {scale:2})
.to(".mask", {clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, 0)
.to(".mask", {scale:0.95, duration:2})




GSDevTools.create({animation:tl})

// image credits
// https://www.pexels.com/photo/low-angle-photo-of-volkswagen-kombi-2533092/
// Photo by Alfonso Escalante from Pexels
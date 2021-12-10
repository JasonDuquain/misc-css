const mainTl = gsap.timeline({id:"stats"});
const items = gsap.utils.toArray("li")

items.forEach((element, index) => {
	
})

GSDevTools.create({ animation: mainTl });


/* COMPLETE

const mainTl = gsap.timeline({id:"stats", repeat: 1, repeatDelay: 1});
const items = gsap.utils.toArray("li")

items.forEach((element, index) => {
	let text = element.innerText;
  element.innerText = "";
  let tl = gsap.timeline()
  .set(element, { opacity: 1 })
  .to(element, {
    scrambleText: {
      text: text,
      oldClass: "old",
      newClass: "new"
    }
  })
  mainTl.add(tl, index * .2)
})

GSDevTools.create({ animation: mainTl });

*/


/* START

const mainTl = gsap.timeline({id:"stats"});
const items = gsap.utils.toArray("li")

items.forEach((element, index) => {
	
})

GSDevTools.create({ animation: mainTl });

*/
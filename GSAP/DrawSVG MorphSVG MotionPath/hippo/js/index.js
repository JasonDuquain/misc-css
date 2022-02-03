/* https://www.youtube.com/watch?v=Uxa9sdaeyKM - start at 7:40 */

/* #start is actually #hippo...hippo, elephant, and star are set to visibility: hidden - make sure to make visible whichever one is used at the start!! When you switch from doing a timeline with all 4 you will need to make sure circle is the visible one!! */

let tl = gsap.timeline( { defaults: { duration: 1 } } );
let circle = document.getElementById("circle");

tl.to(circle, {morphSVG:"#hippo"}, "+=1")
  .to(circle, {morphSVG:"#star"}, "+=1")
  .to(circle, {morphSVG:"#elephant"}, "+=1")
  .to(circle, {morphSVG:circle}, "+=1");

  //findShapeIndex("#hippo", "#star");




/* https://www.youtube.com/watch?v=1wfeqDyMUx4&t=1010s&ab_channel=OnlineTutorials */

let stars = document.getElementById("stars");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let moon = document.getElementById("moon");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector("header");

window.addEventListener("scroll", (e) => {
  
});

/* COMPLETE

window.addEventListener("scroll", (e) => {
  let value = window.scrollY;
  stars.style.left = `${value * 0.05}px`;
  moon.style.transform = `translateY(${value * 1.05}px)`;
  mountains_behind.style.transform = `translateY(${value * 0.5}px)`;
  mountains_front.style.transform = `translateY(${value * 0}px)`;
  text.style.transform = `translateX(-${value * 2}px)`;
  btn.style.transform = `translateY(${50 + value * .1}px)`;
  header.style.transform = `translateY(${value * 0.5}px)`;
});

*/

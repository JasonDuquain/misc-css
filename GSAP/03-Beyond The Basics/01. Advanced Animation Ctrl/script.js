let home = document.querySelector("#home");
let candy = document.querySelector("#candy");
let dogpark = document.querySelector("#dogpark");
let school = document.querySelector("#school");
let progressSlider = document.querySelector("#progressSlider");
let time = document.querySelector("#time");
let pause = document.querySelector("#pause");

let animation;

function animationUpdate() {
  
}

progressSlider.addEventListener("input", function () {
  
});

progressSlider.addEventListener("change", function () {
  
});

pause.addEventListener('click', (e) => {
  
});

home.addEventListener('click', () => {
  
});

candy.addEventListener('click', () => {
  
});

dogpark.addEventListener('click', () => {
  
});

school.addEventListener('click', () => {
  
});



/* COMPLETE

let home = document.querySelector("#home");
let candy = document.querySelector("#candy");
let dogpark = document.querySelector("#dogpark");
let school = document.querySelector("#school");
let progressSlider = document.querySelector("#progressSlider");
let time = document.querySelector("#time");
let pause = document.querySelector("#pause");


let animation = gsap.to('#herman', {
  duration: 3,
  motionPath: {
    path: '#motionpath',
    align: '#herman'
  },
  ease: 'none',
  onUpdate: animationUpdate,
  onComplete: () => pause.innerHTML = 'play'
});

function animationUpdate() {
  progressSlider.value = this.progress();
  time.innerHTML = this.progress().toFixed(2);
}

progressSlider.addEventListener("input", function () {
  animation.progress(this.value).pause();
});

progressSlider.addEventListener("change", function () {
  pause.innerHTML = 'play';
});

pause.addEventListener('click', (e) => {
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? 'play' : 'pause'; 
});

home.addEventListener('click', () => {
  animation.pause();
  gsap.to(animation, { progress: 0, duration: 1 })
});

candy.addEventListener('click', () => {
  animation.pause();
  gsap.to(animation, { progress: 0.5, duration: 1 })
});

dogpark.addEventListener('click', () => {
  animation.pause();
  gsap.to(animation, { progress: 0.9, duration: 1 })
});

school.addEventListener('click', () => {
  animation.pause();
  gsap.to(animation, { progress: 1, duration: 1 })
});

*/


/* 

//START - start at 4:20 of 'from illusrator to animation' (02.mp4)

let home = document.querySelector("#home");
let candy = document.querySelector("#candy");
let dogpark = document.querySelector("#dogpark");
let school = document.querySelector("#school");
let progressSlider = document.querySelector("#progressSlider");
let time = document.querySelector("#time");
let pause = document.querySelector("#pause");

let animation;

function animationUpdate() {
  
}

progressSlider.addEventListener("input", function () {
  
});

progressSlider.addEventListener("change", function () {
  
});

pause.addEventListener('click', (e) => {
  
});

home.addEventListener('click', () => {
  
});

candy.addEventListener('click', () => {
  
});

dogpark.addEventListener('click', () => {
  
});

school.addEventListener('click', () => {
  
});

*/
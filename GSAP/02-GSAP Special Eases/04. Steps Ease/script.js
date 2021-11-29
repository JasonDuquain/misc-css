/* video only goes over a little of this demo - img is 4800px wide */

let animation = gsap.to("img", {duration:4, x:-4200, ease:"steps(7)"}).pause()

let progressSlider = document.querySelector("#progressSlider");

progressSlider.addEventListener("input", function () {
  console.log(this.value)
  animation.progress(this.value).pause();
});


/* START



let progressSlider = document.querySelector("#progressSlider");

});

*/

/* COMPLETE

let animation = gsap.to("img", {duration:4, x:-4200, ease:"steps(7)"}).pause()

let progressSlider = document.querySelector("#progressSlider");
progressSlider.addEventListener("input", function () {
  animation.progress(this.value).pause();
});

*/
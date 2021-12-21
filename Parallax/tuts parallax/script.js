/* https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-build-a-dead-simple-parallax-effect-with-css-javascript--cms-33061?_ga=2.199932206.1499242454.1639790792-1729918703.1631748735 */

const parallaxEls = document.querySelectorAll("[data-speed]");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  for (const parallaxEl of parallaxEls) {
    const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
    const transformY = this.scrollY * parallaxEl.dataset.speed;
    if (parallaxEl.classList.contains("banner-title")) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
    } else if (parallaxEl.classList.contains("banner-subtitle")) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
    } else {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    }
  }
}

/* COMPLETE

const parallaxEls = document.querySelectorAll("[data-speed]");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  for (const parallaxEl of parallaxEls) {
    const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
    const transformY = this.scrollY * parallaxEl.dataset.speed;
    if (parallaxEl.classList.contains("banner-title")) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
    } else if (parallaxEl.classList.contains("banner-subtitle")) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
    } else {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    }
  }
}

*/
gsap.registerPlugin(Flip);

let scale = false;
// width / height or scale section
const widthHeight = document.querySelector(".width-height");
widthHeight.querySelector(".btn--wh").addEventListener("click", () => {
	const container1 = widthHeight.querySelector(".container1");
  const container2 = widthHeight.querySelector(".container2");
  const box = widthHeight.querySelector(".box");
  const state = Flip.getState(box);
  
  const parent = box.parentElement === container1 ? container2 : container1;
  parent.append(box);
  
  Flip.from(state, { duration: 1 });
});

widthHeight.querySelector(".btn--scale").addEventListener("click", () => {
	const container1 = widthHeight.querySelector(".container1");
  const container2 = widthHeight.querySelector(".container2");
  const box = widthHeight.querySelector(".box");
  const state = Flip.getState(box);
  
  const parent = box.parentElement === container1 ? container2 : container1;
  parent.append(box);
  
  Flip.from(state, { duration: 1, scale: true });
});

// swap elements section
const swap = document.querySelector(".swap-elements");
let swapBox = swap.querySelector(".box"); /* the image */
swap.querySelector(".btn--swap").addEventListener("click", () => {
	const container1 = swap.querySelector(".container1");
  const container2 = swap.querySelector(".container2");
  const state = Flip.getState(swapBox);
  
  const leaveEl = swapBox;
  const enterEl = swapBox.cloneNode();
  if (leaveEl.parentNode === container1) {
    container2.appendChild(enterEl);
    enterEl.setAttribute("src", "https://placehold.co/600x600");
  } else {
    container1.appendChild(enterEl);
    enterEl.setAttribute("src", "https://placehold.co/300x300");
  }
  swapBox = enterEl;
  
	Flip.from(state, {
    targets: enterEl,
		duration: 1,
    fade: true, // to crossfade the elements. 
    onComplete: () => leaveEl.remove()
	});
});
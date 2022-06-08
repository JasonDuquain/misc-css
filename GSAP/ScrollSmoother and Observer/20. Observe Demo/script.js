gsap.registerPlugin(Observer);

let animating;

gsap.set('#arrow, #velocity', {transformOrigin: 'center'})

const box = document.querySelector('.box')
const ySetter = gsap.quickSetter(".box", "y", "px")
const clamper = gsap.utils.clamp(0, 10000)

var transformer = gsap.utils.pipe(
  gsap.utils.clamp(-21000, 21000),
  gsap.utils.mapRange(-21000, 21000, -800, 800)
);

function getDifference(a, b) {
  return Math.abs(a - b);
}

let y = 0
let x = 0

let quickRotate = gsap.quickTo("#velocity", "rotation")
function rotate(value) {
  if(animating) return;
  animating = true;
  
  gsap.to('#arrow',{
    rotate: value + '_short',
    ease: 'back.out',
    duration: 0.2,
    onComplete: () => { animating = false }
  })
}

Observer.create({
  type: "wheel,touch,scroll,pointer", 
  onChange: (self) => {
    console.log(self.deltaY, self.velocityY)
    quickRotate(transformer(absoluteMost(self.velocityX, self.velocityY)));
  },
  onUp: () => {
    rotate(0)
  },
  onDown: () => {
    rotate(180)
  },
  onLeft: () => {
    rotate(270)
  },
  onRight: () => {
    rotate(90)
  },
  onPress: (self) => {    
     gsap.to('#arrow',{
      scale: 0.7
    })
  },
  onRelease: () => {
    gsap.to('#arrow',{
      scale: 1,
      ease: 'back.out'
    })
  },
  preventDefault: true, // prevent default scrolling behaviour
  tolerance: 10,
});

function absoluteMost(a, b) {
  return Math.abs(a) > Math.abs(b) ? a : b;
}
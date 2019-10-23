// Establish a timeline
var tl = new TimelineMax({
  repeat: -1
});

// Get the linearGradient ID & gradientTransform attribute
var gradient      = document.getElementById('gradient'),
    gradient_attr = gradient.getAttribute('gradientTransform');

// The loop to iterate over values of 0-360
for(var i = 0, l = 360; i <= l; i++) {
  tl.to(gradient, 0.01, {
    attr: {
      gradientTransform: 'rotate(' + -i + ')'
    },
    ease: Linear.easeInOut
  })
}
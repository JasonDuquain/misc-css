//even though this is a relatively simplistic example, the code can still be overwhelming.

function createPanel(panel) {
    var tl = new TimelineLite();
    tl.from(panel + " .bg", 0.4, {
        scale: 0,
        ease: Power1.easeInOut
    })
    .from(panel + " .bg", 0.3, {
        rotation: 90,
        ease: Power1.easeInOut
    })
    .staggerFrom(panel + " .text span", 1.1, {
        y: -50,
        opacity: 0,
        ease: Elastic.easeOut
    }, 0.06)
    .addLabel("out", "+=1")
    .staggerTo(panel + " .text span", 0.3, {
        opacity: 0,
        y: 50,
        ease: Power1.easeIn
    }, -0.06, "out")
    .to(panel + " .bg", 0.4, {
        scale: 0,
        rotation: -90,
        ease: Power1.easeInOut
    })
    
    return tl;
    
}


var master = new TimelineMax();
master.add(createPanel(".panel1"))
  .add(createPanel(".panel2"))
  .add(createPanel(".panel3"));


//make smaller for when demo is embedded
TweenLite.set(".banner", {
    scale: 0.8,
    transformOrigin: "left top"
});

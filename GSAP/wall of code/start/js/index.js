//even though this is a relatively simplistic example, the code can still be overwhelming.
var tl = new TimelineMax();

////////////////// PANEL 1
tl.from(".panel1 .bg", 0.4, {
    scale: 0,
    ease: Power1.easeInOut
}, "in1")
.from(".panel1 .bg", 0.3, {
    rotation: 90,
    ease: Power1.easeInOut
}, "in1")
.staggerFrom(".panel1 .text span", 1.1, {
    y: -50,
    opacity: 0,
    ease: Elastic.easeOut
}, 0.06)
.addLabel("out1", "+=1")
.staggerTo(".panel1 .text span", 0.3, {
    opacity: 0,
    y: 50,
    ease: Power1.easeIn
}, -0.06, "out1")
.to(".panel1 .bg", 0.4, {
    scale: 0,
    rotation: -90,
    ease: Power1.easeInOut
})

////////////////// PANEL 2
.from(".panel2 .bg", 0.4, {
    scale: 0,
    ease: Power1.easeInOut
}, "in2")
.from(".panel2 .bg", 0.3, {
    rotation: 90,
    ease: Power1.easeInOut
}, "in2")
.staggerFrom(".panel2 .text span", 1.1, {
    y: -50,
    opacity: 0,
    ease: Elastic.easeOut
}, 0.06)
.addLabel("out2", "+=1")
.staggerTo(".panel2 .text span", 0.3, {
    opacity: 0,
    y: 50,
    ease: Power1.easeIn
}, -0.06, "out2")
.to(".panel2 .bg", 0.4, {
    scale: 0,
    rotation: -90,
    ease: Power1.easeInOut
})

////////////////// PANEL 3
.from(".panel3 .bg", 0.4, {
    scale: 0,
    ease: Power1.easeInOut
}, "in3")
.from(".panel3 .bg", 0.3, {
    rotation: 90,
    ease: Power1.easeInOut
}, "in3")
.staggerFrom(".panel3 .text span", 1.1, {
    y: -50,
    opacity: 0,
    ease: Elastic.easeOut
}, 0.06)

.addLabel("out3", "+=1")
.staggerTo(".panel3 .text span", 0.3, {
    opacity: 0,
    y: 50,
    ease: Power1.easeIn
}, -0.06, "out3")
.to(".panel3 .bg", 0.4, {
    scale: 0,
    rotation: -90,
    ease: Power1.easeInOut
});

//good
//tl.play("in3");
//tl.timeScale(3).repeat(2);


//make smaller for when demo is embedded
TweenLite.set(".banner", {
    scale: 0.8,
    transformOrigin: "left top"
});

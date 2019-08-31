

/*******************  GSAP   *******************/

/*******
pseudo elements (like :after, :before, etc. are impossible to reference directly in JavaScript, but you can animate them using CSSRulePlugin. NOTE: CSSRulePlugin requires the CSSPlugin, so please make sure it is loaded too.
********/

/* MorphSVGPlugin.convertToPath('svg'); nope */

//let svgOne = document.querySelector('.features svg:first-of-type')
//let svgTwo = document.querySelector('.features .feature:nth-of-type(2) svg')



const icons = Array.from(document.querySelectorAll('.header__seenon-logos > img'));

let rule = CSSRulePlugin.getRule('.header__seenon-text');
let ruleBefore = CSSRulePlugin.getRule('.header__seenon-text:before');
let ruleAfter = CSSRulePlugin.getRule('.header__seenon-text:after');

TweenMax.set('.header', { perspective: 800 })

TweenMax.set(rule, { 
    cssRule: {
      opacity: 0
  } 
});
TweenMax.set(ruleBefore, { 
    cssRule: {
      scaleX: 0
  } 
});
TweenMax.set(ruleAfter, { 
    cssRule: {
      width: 0
  } 
});
TweenMax.set('.header__logo', { 
    opacity: 0,
    scale: 8,
    ease: Power3.easeIn
});
TweenMax.set('.header .heading-3', { 
    opacity: 0,
    x: -100,
    ease: Power2.easeIn
});
TweenMax.set('.heading-1', { 
    opacity: 0,
    x: 100,
    ease: Power2.easeIn
});
TweenMax.set('.header__btn', { 
    rotationX: -90,
    opacity: 0
});
TweenMax.set(icons, { opacity: 0, y: -50 });


let tl = new TimelineMax({ delay: .5 });

tl.to('.header__logo', .3, {
    opacity: 1,
    scale: 1
})
.to('.header .heading-3', .3, { 
    opacity: 1,
    x: 0
}, "-=.1")
.to('.heading-1', .3, { 
    opacity: 1,
    x: 0
}, "-=.3")
.to(rule, .3, { 
    cssRule: {
      opacity: 1
  } 
})
.to(ruleBefore, .3, { 
    cssRule: {
      transformOrigin: "right center",
      scaleX: "1"
  } 
})
.to(ruleAfter, .3, { 
    cssRule: {
      width: "100%"
  } 
}, "-=.3")
.staggerTo(icons, .8, { 
    opacity: 1,
    y: 0,
    ease: Power4.easeOut
}, .2, "-=.2")
.to('.header__btn', .5, { 
    rotationX: 0,
    opacity: 1,
    transformOrigin: "center bottom",
    ease: Elastic.easeInOut
}, "-=.6")

///WHY IS THERE A DELAY AFTER THE STAGGERTO ANIMATION??!!


//tl.progress(.35) // start animation at 25% in
tl.timeScale(.5); // run animation half as fast







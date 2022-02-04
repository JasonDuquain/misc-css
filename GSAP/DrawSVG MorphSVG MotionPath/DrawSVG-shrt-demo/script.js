//we set visibility:hidden in the CSS to avoid an initial flash - make them visible now, but the from() tweens are going to essentially hide them anyway because their stroke position/length will be 0.
gsap.set(".gray-line, .green-line, .green-line-thin, .plugin-stroke", {visibility:"visible"});

var tl = gsap.timeline({});

//animate the plugin text first, drawing to 100%
// Strokes of DrawSVG text
tl.from(".plugin-stroke", {duration: 4, drawSVG:0, ease:"power1.inOut"})

  //now animate the logo strokes (note we use "102% as FireFox 34 miscalculates the length of a few strokes)
  .fromTo(".gray-line, .green-line, .green-line-thin", {drawSVG:0}, {duration: 2, drawSVG:"102%"}, "-=1")
  //fade in the real logo and the rest of the text

  //"Plugin" "By Greensock", GSAP guy colored in
  .to("#Plugin, #ByGreenSock, #logo", 1, {autoAlpha:1, ease:"none"})
  //hide the logo strokes that are now obscured by the real logo (just to improve rendering performance)
  .set("#lines", {visibility:"hidden"});



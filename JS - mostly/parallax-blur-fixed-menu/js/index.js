//Based on the Scroller function from @sallar
let content = document.querySelector('header .content');
let blur = document.querySelector('header .overlay');
let nav = document.querySelector('nav');
let wHeight = window.innerHeight;

window.addEventListener('resize', () => wHeight = window.innerHeight);

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        function( cb ){
            window.setTimeout(cb, 1000 / 60);
        };
})();



//var scroller = new Scroller();  
//scroller.init();
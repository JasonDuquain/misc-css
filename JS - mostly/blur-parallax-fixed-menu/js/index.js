
//Based on the Scroller function from @sallar
let content = document.querySelector('header .content');
let blur = document.querySelector('header .overlay'); // this element has the filter: blur(4px) and opacity: 0 applied
let nav = document.querySelector('nav');
let wHeight = window.innerHeight;

window.addEventListener('resize', () => wHeight = window.innerHeight);

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        function( cb ){
            window.setTimeout(cb, 1000 / 60);
        };
})();

class Scroller {
    constructor() {
        this.latestKnownScrollY = 0;
        this.ticking = false;     
    }
    
    init() {
        window.addEventListener('scroll', this.onScroll.bind(this));
        
    }
    
    onScroll() {
        
    }
    
    requestTick() {
        
    }
    
    update() {
        
        
    }
}

var scroller = new Scroller();  
scroller.init();
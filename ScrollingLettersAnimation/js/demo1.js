
{
    const chars = ['$','%','#','@','&','(',')','=','*','/'];
    const charsTotal = chars.length;
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    class Entry {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.image = this.DOM.el.querySelector('.content__img');
            this.DOM.title = {word: this.DOM.el.querySelector('.content__text')};
            
            charming(this.DOM.title.word);
            
            this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
            
            this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
            
            this.lettersTotal = this.DOM.title.letters.length;
            
            observer.observe(this.DOM.el);
        }  
        enter(direction = 'down') {
            this.DOM.title.word.style.opacity = 1;
            
            this.timeouts = [];
            this.complete = false;
            let cnt = 0;
            
			
        }
        exit(direction = 'down') {
            this.DOM.title.word.style.opacity = 0;
        }   
    }

    let observer;
    let current = -1;
    let allentries = [];
    const sections = Array.from(document.querySelectorAll('.content__section'));
    // Preload all the images in the page..
	
}
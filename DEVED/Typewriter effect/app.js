/* START AT 10:45 - JS */

const texts = ['websites', 'illustrations', 'pancakes'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    
	if (count === texts.length) {
        clearTimeout(clearIt)   
        count = 0;
    }
    
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    
    let clearIt = setTimeout(type, 175);
    
    
}());



/* COMPLETE 

(function type() {
    
    if (count === texts.length) {
        clearTimeout(clearIt)   
        count = 0;
    }
    
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    
    let clearIt = setTimeout(type, 175);
    
}());

*/


/* https://www.youtube.com/watch?v=T4VE_6v9hFs */

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hard", "fun", "fru$tr*t!ng", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        } 
        
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);

    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
       
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        } 
        
        typedTextSpan.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        
        setTimeout(type, typingDelay);
        
    }
}

document.addEventListener("DOMContentLoaded", function() { 
    if (textArray.length) {
        setTimeout(type, newTextDelay)
    }
});
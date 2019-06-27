
let percent = document.querySelector('.percent');
let num = 0;

let clearIt = setInterval(() => {
    num += .26;
    percent.textContent = num.toFixed(0) + '%';
}, 100);


let percentTwo = document.querySelector('.percent-two');
let numTwo = 0;

let clearItTwo = setInterval(() => {
    numTwo += 1.45;
    percentTwo.textContent = numTwo.toFixed(0) + '%';
}, 100);


let percentThree = document.querySelector('.percent-three');
let numThree = 0;

let clearItThree = setInterval(() => {
    numThree += 1.16;
    percentThree.textContent = numThree.toFixed(0) + '%';
}, 100);


let percentFour = document.querySelector('.percent-four');
let numFour = 0;

let clearItFour = setInterval(() => {
    numFour += 2;
    percentFour.textContent = numFour.toFixed(0) + '%';
}, 100);


setTimeout(() => {
    clearInterval(clearIt); 
    clearInterval(clearItTwo); 
    clearInterval(clearItThree); 
    clearInterval(clearItFour); 
}, 5000);
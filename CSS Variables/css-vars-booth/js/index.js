const inputs = document.querySelectorAll('.color-box > input');
const root = document.documentElement;
const range = document.querySelector('.booth-slider');

//as slider range's value changes, do something 
range.addEventListener('input', handleSlider);

//as the value in the input changes, do something.
inputs.forEach((el) => el.addEventListener('input', handleInputChange));

function handleInputChange (e) {
    
}

function handleSlider (e) {
    
}


/* COMPLETE

const inputs = document.querySelectorAll('.color-box > input');
const root = document.documentElement;
const range = document.querySelector('.booth-slider');

//as slider range's value changes, do something 
range.addEventListener('input', handleSlider);

//as the value in the input changes, do something.
inputs.forEach((el) => el.addEventListener('input', handleInputChange));

function handleInputChange (e) {
    let value = e.target.value;
    let inputId = e.target.parentElement.getAttribute('id');
    let inputBg = `--bg-${inputId}`;
    root.style.setProperty(inputBg, value);
}

function handleSlider (e) {
    let value = e.target.value;
    root.style.setProperty('--slider', value);
    (value > 0) ? document.body.style.setProperty('background-color', 'var(--secondary-color)') : document.body.style.setProperty('background-color', 'var(--primary-color)'); 
}



*/
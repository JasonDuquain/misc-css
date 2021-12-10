const inputs = document.querySelectorAll('.color-box > input');
const range = document.querySelector('.booth-slider');

range.addEventListener('input', handleSlider);

inputs.forEach((el) => el.addEventListener('input', handleInputChange));

function handleInputChange(e) {
	
}

function handleSlider(e) {
	
}

/* COMPLETE

const inputs = document.querySelectorAll('.color-box > input');
const range = document.querySelector('.booth-slider');

range.addEventListener('input', handleSlider);

inputs.forEach((el) => el.addEventListener('input', handleInputChange));

function handleInputChange (e) {
  let inputId = e.target.parentElement.getAttribute("id");
  let inputBg = `--bg-${inputId}`;
  document.documentElement.style.setProperty(inputBg, e.target.value); 
}

function handleSlider (e) {
    document.documentElement.style.setProperty('--slider', e.target.value);
    (e.target.value > 0) ? 
    document.body.style.setProperty('background-color', 'var(--secondary-color)') : 
    document.body.style.setProperty('background-color', 'var(--primary-color)'); 
}



*/

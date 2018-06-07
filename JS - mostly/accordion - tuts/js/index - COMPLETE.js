var toggleBtn = document.querySelector(".toggle-btn");
var info = document.querySelector(".info");
var less = document.querySelector(".less");
var more = document.querySelector(".more");

let infoHeight = info.offsetHeight;
info.style.height = 0;

toggleBtn.addEventListener('click', () => {
    this.disabled = true;
    more.classList.toggle('show');
    more.classList.toggle('hide');
    less.classList.toggle('show');
    less.classList.toggle('hide');
    const infoNewHeight = info.offsetHeight;
    console.log(infoNewHeight);
    info.style.height = (infoNewHeight === 0) ? `${infoHeight}px` : 0;
    
    setTimeout(() => this.disabled = false, 500);
});

window.addEventListener('resize', () => {
    info.style.removeProperty('height');
    infoHeight = info.offsetHeight;
    
    info.style.height = (more.classList.contains('hide')) ? `${infoHeight}px` : 0;
});
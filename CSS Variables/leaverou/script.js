
/*****  RADIAL GRADIENT ******/
let root = document.documentElement;


/***** SLIDER PROGRESS input.value = 0 - 100 ******/




/******* SCROLLING  ********/




/*  COMPLETE

//////RADIAL GRADIENT
let root = document.documentElement;

document.addEventListener('mousemove', (e) => {
    let x = e.clientX / innerWidth;
    let y = e.clientY / innerHeight;
    root.style.setProperty("--mouse-x", x);
    root.style.setProperty("--mouse-y", y);
});

/////SLIDER PROGRESS
for (input of document.querySelectorAll('input')) {
    input.style.setProperty("--value", input.value);
}

document.addEventListener('input', (ev) => {
    var input = ev.target;
    input.style.setProperty('--value', input.value);
});

////SCROLLING
for (let el of document.querySelectorAll('.scrolling')) {
    el.addEventListener('scroll', function() {
        let maxScroll = el.scrollHeight - el.offsetHeight;
        console.log(el.scrollHeight, el.offsetHeight, maxScroll);
        let scroll = el.scrollTop / maxScroll;
        console.log(scroll);
        el.style.setProperty('--scroll', scroll);
        el.previousElementSibling.textContent = `${(scroll * 100).toFixed(0)}% read`;
    });
}


*/
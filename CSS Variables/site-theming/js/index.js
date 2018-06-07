const root = document.documentElement; 
const themeBtns = document.querySelectorAll('.theme > button');



function handleThemeUpdate(e) {
    
}


/* COMPLETE 

const root = document.documentElement; 
const themeBtns = document.querySelectorAll('.theme > button')

themeBtns.forEach((el) => el.addEventListener('click', handleThemeUpdate))

function handleThemeUpdate(e) {
    switch (e.target.value) {
        case "dark":
            root.style.setProperty('--bg', 'black');
            root.style.setProperty('--bg-text', 'white');
            break;
        case "calm":
            root.style.setProperty('--bg', '#B3E5FC');
            root.style.setProperty('--bg-text', '#37474F');
            break;   
    }
}

*/
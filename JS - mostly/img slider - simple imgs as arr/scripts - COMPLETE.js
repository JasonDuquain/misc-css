
let img = document.querySelector('img');
let imgArr = ['a','b', 'c', 'd'];
let i = imgArr.length;
let dotContainer = document.querySelector('.dotContainer');
let dotArr = [];

for (let i = 0; i < imgArr.length; i++) {
     let dot = document.createElement('span');
     dot.classList.add('dot');
     dotContainer.append(dot);
     dotArr.push(dot);
     dotArr[0].classList.add('active'); 
    
    dot.addEventListener('click', (e) => {
        img.setAttribute('src', `${imgArr[i]}.jpg`);
        
        dotArr.forEach((el, idx) => {
            el.classList.remove('active');
            e.target.classList.add('active');
        })
    })
}
    
document.querySelector('.prev').addEventListener('click', prevImage);
document.querySelector('.next').addEventListener('click', nextImage);

function nextImage(e) {
    console.log(`1st line of nextImage(): i is ${i}`);
    (i < imgArr.length) ? i++ : i = 1;
    img.setAttribute('src', `${imgArr[i-1]}.jpg`); 
    
    dotArr.forEach((el, idx) => el.classList.remove('active'));  
    dotArr[i-1].classList.add('active');
    console.log(`last line of nextImage(): i is ${i}`);
    //clearInterval(clearIt); 
}

function prevImage(e) {
    console.log(`1st line of prevImage(): i is ${i}`);
    
    /* this was: (i < imgArr.length + 1 && i > 1) ? i-- : i = imgArr.length; */
    (i > 1) ? i-- : i = imgArr.length;
    img.setAttribute('src', `${imgArr[i-1]}.jpg`);
    
    dotArr.forEach((el, idx) => el.classList.remove('active'));
    dotArr[i-1].classList.add('active');
    console.log(`last line of prevImage(): i is ${i}`);
    //clearInterval(clearIt);
}

/*
let clearIt = setInterval(function () {
    (i < imgArr.length) ? i++ : i = 1;
    img.setAttribute('src', `${imgArr[i-1]}.jpg`);
}, 3000); 
*/

// this fixes the issue where the 1st time next btn is clicked nothing happens since the image is already img[0].jpg..remove to see the original issue
nextImage();
      
      

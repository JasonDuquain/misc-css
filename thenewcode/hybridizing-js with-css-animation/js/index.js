
let planets = document.getElementById("planets");
let numPlanets = document.querySelectorAll("#planets > img").length;
let planetPhotos = Array.from(planets.children);

function createTimer(i) {
    
}

function iterate(numPlanets) {
    
}







/* COMPLETE

let planets = document.getElementById("planets");
let numPlanets = document.querySelectorAll("#planets > img").length;
let planetPhotos = Array.from(planets.children);

function createTimer(i) {
    setTimeout(() => planetPhotos[i].className = "wax", 2000 + 600 * i);
}

function iterate(numPlanets) {
    planetPhotos.forEach((el, idx) => {
        createTimer(idx);
    });
}

iterate(planetPhotos.length);

*/
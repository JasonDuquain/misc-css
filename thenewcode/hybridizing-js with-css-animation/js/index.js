
let planets = document.getElementById("planets");
let numPlanets = document.querySelectorAll("#planets > img").length;
let planetPhotos = planets.children;



/* COMPLETE

let planets = document.getElementById("planets");
let numPlanets = document.querySelectorAll("#planets > img").length;
let planetPhotos = planets.children;

function createTimer(i) {
    setTimeout(() => planetPhotos[i].className = "wax", 2000 + 600 * i);
}

function iterate(numPlanets) {
    for (let i = 0; i < numPlanets; i++) {
        createTimer(i);
    }
}

iterate(numPlanets);

*/
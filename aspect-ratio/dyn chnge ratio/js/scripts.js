
let options = document.querySelectorAll("[name=ratio]");


















/* COMPLETE

let options = document.querySelectorAll("[name=ratio]");

for (var i = 0; i < options.length; i++) {
  options[i].addEventListener("change", function () {
    let ratio = this.getAttribute("data-ratio");

    document.querySelector(".card__thumb").style.setProperty("--ratio", ratio);
  });
}

*/
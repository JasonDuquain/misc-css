const transPos = document.querySelector("#direction");

transPos.addEventListener("input", function () {
  document.documentElement.style.setProperty("--inset-top", "0");
  document.documentElement.style.setProperty("--inset-right", "0");
  document.documentElement.style.setProperty("--inset-bottom", "0");
  document.documentElement.style.setProperty("--inset-left", "0");

  let direction = this.value;
  document.documentElement.style.setProperty(direction, "100%");
});
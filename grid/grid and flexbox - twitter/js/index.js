
var btn_toggle = document.querySelector(".btn-toggle");

btn_toggle.addEventListener("click", function(){
  if(btn_toggle.textContent==="+") {
    this.textContent= "-";
  } else {
    this.textContent= "+";
  }
},false);



/****** ALTERNATIVE WAY USING TERNARY OPERATOR

btn_toggle.addEventListener("click", function(){
    (this.textContent==="+") ? this.textContent= "-" : this.textContent= "+";

},false);


*********/
(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  
    
    
  // listen for events
  window.addEventListener("load", cbFn);
  window.addEventListener("resize", cbFn);
  window.addEventListener("scroll", cbFn);

})();





























(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(elem) {
    var rect = elem.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
    
    function cbFn() {
        items.forEach((el) => {
            if (isElementInViewport(el)) {
                el.classList.add('in-view');
            }
        })
    }

  // listen for events
  window.addEventListener("load", cbFn);
  window.addEventListener("resize", cbFn);
  window.addEventListener("scroll", cbFn);

})();



*/
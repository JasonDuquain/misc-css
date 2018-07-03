















































/* MY SOLUTION
 

let nav = document.querySelector('.nav-tabs');
let links = document.querySelectorAll('.nav-tabs a');
let divs = document.querySelectorAll('.tab-pane');

nav.addEventListener('click', function(e) {
    if (!e.target.parentNode.classList.contains('active') && e.target.tagName.toLowerCase() === 'a') {
        links.forEach((el, idx) => {
            el.parentNode.classList.remove('active');
            divs[idx].classList.remove('active');
            if (e.target.getAttribute('href').slice(1) === divs[idx].getAttribute('id')) {
                el.parentNode.classList.add('active');
                divs[idx].classList.add('active');
            }
        });
    }
});
    

*/



/* CODEPEN SOLUTION---

window.addEventListener('load', function() {

    var myTabs = document.querySelectorAll("ul.nav-tabs > li");
    var myContentPanes = document.querySelectorAll(".tab-pane");
    
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks);
    }
    
    function myTabClicks(e)  {
        //console.log(e.target, e.currentTarget, this);
        for (var i = 0; i < myTabs.length; i++) {
           myTabs[i].classList.remove("active");
        }
        
        var clickedTab = e.currentTarget; // the LI that was clicked
        clickedTab.classList.add("active");
        e.preventDefault();
        
        for (i = 0; i < myContentPanes.length; i++) {
           myContentPanes[i].classList.remove("active");
        }

        var anchorReference = e.target; // the A that is a child of the LI that was clicked
        var activePaneId = anchorReference.getAttribute("href");
        var activePane = document.querySelector(activePaneId); //how does this match since activePaneId includes the '#'??
        activePane.classList.add("active");

    }

   
    
});

    

*/
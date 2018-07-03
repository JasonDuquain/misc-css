
var tabs = document.querySelectorAll('.ProductPicker-nav a')
var uls = document.querySelectorAll('.ProductListWindow ul');
var nav = document.querySelector('.ProductPicker-nav');












































/*

// ONE SOLUTION

function showMe(e) {
    e.preventDefault();
    if (!e.target.classList.contains('NavItem--is-active') && e.target.tagName.toLowerCase() === 'a' ) {
        tabs.forEach((el, idx) => {
            el.classList.remove('NavItem--is-active');
            e.target.classList.add('NavItem--is-active');
            uls[idx].classList.add('ProductList--is-hidden');
            let hay = e.target.getAttribute('href').slice(1);
            document.getElementById(hay).classList.remove('ProductList--is-hidden');
        });
    }
}

nav.addEventListener('click', showMe);


//ALTERNATE APPROACH:

/*

nav.addEventListener('click', function(e) {
    
    if (e.target.tagName.toLowerCase() === 'a' && !e.target.classList.contains('NavItem--is-active')) {
    
        tabs.forEach((el, i) => {
            el.classList.remove('NavItem--is-active');
            uls[i].classList.add('ProductList--is-hidden');
            e.target.classList.add('NavItem--is-active');
            
            if (e.target.getAttribute('href').slice(1) === uls[i].getAttribute('id')) {
                uls[i].classList.remove('ProductList--is-hidden');
                
            }

        }); 
        
        
    } 
    
});


*/







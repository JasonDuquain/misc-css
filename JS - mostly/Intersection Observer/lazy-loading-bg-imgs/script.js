
document.addEventListener('DOMContentLoaded', () => {
    const lazyBgs = document.querySelectorAll(".lazy-background");
    
    
       
});




/* COMPLETE

document.addEventListener('DOMContentLoaded', () => {
    const lazyBgs = document.querySelectorAll(".lazy-background");
    
    if ("IntersectionObserver" in window) { 
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                   entry.target.classList.add("visible");
                   observer.unobserve(entry.target);
                }
            });
        });
        
        lazyBgs.forEach((lazyBg) => observer.observe(lazyBg)); 
    }
       
});

*/
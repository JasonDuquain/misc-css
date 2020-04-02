const images = document.querySelectorAll('[data-src]');

let loaded = 0;

const config = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
}

let observer = new IntersectionObserver();



function preloadImage(img) {
  
}

function _updateMonitoring() {
    const container = document.getElementById('isIntersecting');
    const placeholder = container.querySelector('.placeholder');
    loaded += 1;
    placeholder.innerHTML = loaded;
    container.style.opacity = 1;
}





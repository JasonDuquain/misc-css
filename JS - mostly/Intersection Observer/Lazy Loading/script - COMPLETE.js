const images = document.querySelectorAll('[data-src]');

let loaded = 0;

const config = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
}

let observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
			
            console.log(`Image ${entry.target.getAttribute('data-src')} is in the viewport!`);
			
            preloadImage(entry.target);
            
            self.unobserve(entry.target);
        }
    });
}, config);

images.forEach(image => {
  observer.observe(image);
});

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) {return;}
  img.setAttribute('src', src);
  _updateMonitoring();
}

function _updateMonitoring() {
  const container = document.getElementById('isIntersecting');
  const placeholder = container.querySelector('.placeholder');
  loaded += 1;
  placeholder.innerHTML = loaded;
  container.style.opacity = 1;
}






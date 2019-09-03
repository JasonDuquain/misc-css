const images = document.querySelectorAll('[data-src]');

let loaded = 0;

const config = {
    
}





function _updateMonitoring() {
  const container = document.getElementById('isIntersecting');
  const placeholder = container.querySelector('.placeholder');
  loaded += 1;
  placeholder.innerHTML = loaded;
  container.style.opacity = 1;
}





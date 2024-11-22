
window.addEventListener('scroll', function() {
    const videoContainer = document.getElementById('video-container');
    

    const rect = videoContainer.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {

      videoContainer.classList.add('visible');
    }
  });
  
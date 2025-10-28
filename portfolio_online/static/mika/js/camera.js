let currentIndex = 0;

function showPhoto(index) {
const photoDisplay = document.getElementById("photoDisplay");
photoDisplay.src = photos[index];
}

function nextPhoto() {
currentIndex = (currentIndex + 1) % photos.length;
showPhoto(currentIndex);
}

function prevPhoto() {
currentIndex = (currentIndex - 1 + photos.length) % photos.length;
showPhoto(currentIndex);
}

/* PARTE DOS VIDEOS */

// Abre o vídeo apenas ao clicar em "Ver Projeto"
document.querySelectorAll('.ver-projeto').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const videoSrc = link.getAttribute('data-video');
    const modal = document.getElementById('videoModal');
    const videoElement = document.getElementById('modalVideo');

    videoElement.querySelector('source').src = videoSrc;
    videoElement.load();
    modal.style.display = 'flex';
    videoElement.play();
  });
});

// Fecha o modal ao clicar no X
document.querySelector('.close-modal').addEventListener('click', () => {
  const modal = document.getElementById('videoModal');
  const videoElement = document.getElementById('modalVideo');
  videoElement.pause();
  videoElement.currentTime = 0;
  modal.style.display = 'none';
});

// Fecha o modal clicando fora do conteúdo
window.addEventListener('click', (e) => {
  const modal = document.getElementById('videoModal');
  if (e.target === modal) {
    const videoElement = document.getElementById('modalVideo');
    videoElement.pause();
    videoElement.currentTime = 0;
    modal.style.display = 'none';
  }
});


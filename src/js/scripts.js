// exibição de alert
function showAlert(message) {
  alert(message);
}

// Carrossel de Imagens
let currentImageIndex = 0;
const images = [
  'images/carousel1.jpg',
  'images/carousel2.jpg',
  'images/carousel3.jpg'
];

function showImage(index) {
  const carousel = document.getElementById('carousel');
  carousel.src = images[index];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

// Inicializar o carrossel ao carregar a página
window.onload = function() {
  showImage(currentImageIndex);
};
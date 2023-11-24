// Obtén la lista de imágenes y los puntos indicadores de página
const images = document.querySelectorAll('.gallery > div > picture');
const points = document.querySelectorAll('.gallery > span > a');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const imageId = entry.target.id;
      highlightLink(imageId);
    }
  });
}, { threshold: 0.5 });

images.forEach(image => {
  observer.observe(image);
});

function highlightLink(imageId) {
  points.forEach(link => {
    link.style.backgroundColor = '#aaa';
  });

  const correspondingLink = document.querySelector(`.gallery > span > a[href="#${imageId}"]`);
  if (correspondingLink) {
    correspondingLink.style.backgroundColor = '#888';
  }
}

// Carrusel automático
const carousel = document.getElementById('carousel');
let index = 0;

setInterval(() => {
  index = (index + 1) % carousel.children.length;
  carousel.style.transform = 'translateX(-${index *100}%)';
}, 3000);

// Envío del formulario
function handleFormSubmit(event) {
  event.preventDefault();
  alert("Formulario enviado. ¡Gracias por contactarnos!");
  event.target.reset();
}
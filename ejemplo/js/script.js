// Footer desplegable
function toggleFooter() {
  const footer = document.getElementById("footer");
  const arrow = document.getElementById("footer-arrow");
  
  footer.classList.toggle("active");

  if (footer.classList.contains("active")) {
    arrow.textContent = "▼";
  } else {
    arrow.textContent = "▲";
  }
}

// Ajustar padding-bottom según footer
function ajustarPadding() {
  const footer = document.querySelector("footer");
  document.body.style.paddingBottom = `${footer.offsetHeight}px`;
}

window.addEventListener("load", ajustarPadding);
window.addEventListener("resize", ajustarPadding);

// Envío del formulario
function handleFormSubmit(event) {
  event.preventDefault();
  alert("Formulario enviado. ¡Gracias por contactarnos!");
  event.target.reset();
}

// Modal para ver imágenes con descripción
const modalCarrusel = document.getElementById("modalCarrusel");
const modalImagen = document.getElementById("modalImagen");
const modalDescripcion = document.getElementById("modalDescripcion");

modalCarrusel.addEventListener("show.bs.modal", (event) => {
  const img = event.relatedTarget;
  modalImagen.src = img.getAttribute("src");
  modalDescripcion.textContent = img.getAttribute("data-descripcion");
});

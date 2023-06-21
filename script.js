// Mostrar/ocultar el popup al hacer clic en el botón flotante
var floatingButton = document.querySelector('.floating-button button');
var popup = document.querySelector('.popup');

floatingButton.addEventListener('click', function() {
  popup.style.display = 'block';
});

// Lógica para guardar el ticket al hacer clic en el botón "Guardar Ticket"
var guardarTicketButton = document.querySelector('.popup button[type="submit"]');
guardarTicketButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  // Aquí obtienes los valores del formulario y realizas la lógica para guardar el ticket
});
// Abrir el popup al hacer clic en el botón flotante
document.getElementById("add-ticket-button").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "block";
  });
  
  // Cerrar el popup al hacer clic en el botón de cerrar
  function closePopup() {
    document.querySelector(".popup").style.display = "none";
  }
  
// Selecciona los elementos necesarios
const form = document.querySelector(".formCliente");
const modal = document.getElementById("modal");
const finalizarButton = document.getElementById("finalizar");

// Maneja el envío del formulario
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el envío real del formulario

    // Muestra el modal
    modal.style.display = "flex";
});

// Maneja el clic en el botón 'Finalizar'
finalizarButton.addEventListener("click", function () {
    // Redirige al index.html
    window.location.href = "index.html";
});

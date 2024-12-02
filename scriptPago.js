document.addEventListener("DOMContentLoaded", () => {
    const btnTransferencia = document.getElementById("btnTransferencia");
    const modal = document.getElementById("modalTransferencia");
    const btnEnviar = document.getElementById("btnEnviar");
    const modalContent = modal.querySelector(".modal-content2");
    const btnFinalizar = document.getElementById("btnFinalizar");
    const btnAdjuntar = document.getElementById("btnAdjuntar");
    const fileInput = document.getElementById("fileInput");

    // Abrir el modal
    btnTransferencia.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Enviar comprobante y mostrar mensaje final
    btnEnviar.addEventListener("click", () => {
        modalContent.innerHTML = `
            <div class="mensaje-final">
                <img class="iconoTransaccionExitosa" src="img/logos/logo-transaccion-exitosa.png" alt="">
                <div class="mensajeModalListo">
                    <h3 id="comprobanteEnviado">¡Comprobante enviado!</h3>
                    <h3>En las próximas horas llegará a tu correo el link de descarga del proyecto.</h3>
                </div>
                <button id="btnFinalizar" class="close-btn">Finalizar</button>
            </div>
        `;

        // Reasignamos el evento de cerrar al nuevo botón "Finalizar"
        document.getElementById("btnFinalizar").addEventListener("click", () => {
            modal.style.display = "none"; // Cerrar el modal
        });
    });

    // Cerrar el modal haciendo clic fuera del modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Mostrar el input file al hacer clic en el botón de adjuntar
    btnAdjuntar.addEventListener("click", () => {
        fileInput.click();
    });

    // Mostrar el nombre del archivo seleccionado en el botón
    fileInput.addEventListener("change", (e) => {
        const fileName = e.target.files[0] ? e.target.files[0].name : "Ningún archivo seleccionado";
        btnAdjuntar.textContent = fileName; // Cambiar el texto del botón para mostrar el archivo seleccionado
    });
});

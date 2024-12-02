// --------------------------MODAL TRANSFERENCIA----------------------------------------------------------------
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



// --------------------------MODAL PAYPAL----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const btnPaypal = document.getElementById("btnPaypal"); // Este es el botón que abre el modal
    const modalPaypal = document.getElementById("modalPaypal");
    const btnEnviarPaypal = modalPaypal.querySelector("#btnEnviar");
    const modalContentPaypal = modalPaypal.querySelector(".modal-content2");
    const btnAdjuntarPaypal = modalPaypal.querySelector("#btnAdjuntar");
    const fileInputPaypal = modalPaypal.querySelector("#fileInput");

    // Abrir el modal PayPal
    btnPaypal.addEventListener("click", (e) => {
        e.preventDefault(); // Evitar comportamiento predeterminado (como recargar la página)
        modalPaypal.style.display = "flex";
    });

    // Enviar comprobante y mostrar mensaje final en el modal PayPal
    btnEnviarPaypal.addEventListener("click", () => {
        modalContentPaypal.innerHTML = `
            <div class="mensaje-final">
                <img class="iconoTransaccionExitosa" src="img/logos/logo-transaccion-exitosa.png" alt="">
                <div class="mensajeModalListo">
                    <h3 id="comprobanteEnviado">¡Comprobante enviado!</h3>
                    <h3>En las próximas horas llegará a tu correo el link de descarga del proyecto.</h3>
                </div>
                <button id="btnFinalizarPaypal" class="close-btn">Finalizar</button>
            </div>
        `;

        // Reasignamos el evento de cerrar al nuevo botón "Finalizar"
        document.getElementById("btnFinalizarPaypal").addEventListener("click", () => {
            modalPaypal.style.display = "none"; // Cerrar el modal
        });
    });

    // Cerrar el modal haciendo clic fuera del modal
    modalPaypal.addEventListener("click", (e) => {
        if (e.target === modalPaypal) {
            modalPaypal.style.display = "none";
        }
    });

    // Mostrar el input file al hacer clic en el botón de adjuntar
    btnAdjuntarPaypal.addEventListener("click", () => {
        fileInputPaypal.click();
    });

    // Mostrar el nombre del archivo seleccionado en el botón
    fileInputPaypal.addEventListener("change", (e) => {
        const fileName = e.target.files[0] ? e.target.files[0].name : "Ningún archivo seleccionado";
        btnAdjuntarPaypal.textContent = fileName; // Cambiar el texto del botón para mostrar el archivo seleccionado
    });
});



// --------------------------MODAL PREX----------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const btnPrex = document.getElementById("btnPrex"); // Botón que abre el modal Prex
    const modalPrex = document.getElementById("modalPrex");
    const btnEnviarPrex = modalPrex.querySelector("#btnEnviar");
    const modalContentPrex = modalPrex.querySelector(".modal-content2");
    const btnAdjuntarPrex = modalPrex.querySelector("#btnAdjuntar");
    const fileInputPrex = modalPrex.querySelector("#fileInput");

    // Abrir el modal Prex
    btnPrex.addEventListener("click", (e) => {
        e.preventDefault(); // Evitar comportamiento predeterminado (como recargar la página)
        modalPrex.style.display = "flex";
    });

    // Enviar comprobante y mostrar mensaje final en el modal Prex
    btnEnviarPrex.addEventListener("click", () => {
        modalContentPrex.innerHTML = `
            <div class="mensaje-final">
                <img class="iconoTransaccionExitosa" src="img/logos/logo-transaccion-exitosa.png" alt="">
                <div class="mensajeModalListo">
                    <h3 id="comprobanteEnviado">¡Comprobante enviado!</h3>
                    <h3>En las próximas horas llegará a tu correo el link de descarga del proyecto.</h3>
                </div>
                <button id="btnFinalizarPrex" class="close-btn">Finalizar</button>
            </div>
        `;

        // Reasignamos el evento de cerrar al nuevo botón "Finalizar"
        document.getElementById("btnFinalizarPrex").addEventListener("click", () => {
            modalPrex.style.display = "none"; // Cerrar el modal
        });
    });

    // Cerrar el modal haciendo clic fuera del modal
    modalPrex.addEventListener("click", (e) => {
        if (e.target === modalPrex) {
            modalPrex.style.display = "none";
        }
    });

    // Mostrar el input file al hacer clic en el botón de adjuntar
    btnAdjuntarPrex.addEventListener("click", () => {
        fileInputPrex.click();
    });

    // Mostrar el nombre del archivo seleccionado en el botón
    fileInputPrex.addEventListener("change", (e) => {
        const fileName = e.target.files[0] ? e.target.files[0].name : "Ningún archivo seleccionado";
        btnAdjuntarPrex.textContent = fileName; // Cambiar el texto del botón para mostrar el archivo seleccionado
    });
});

























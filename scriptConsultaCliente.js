document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const mensajeAgradecimiento = document.getElementById("mensajeAgradecimiento");
    const botonOtraConsulta = document.getElementById("otraConsulta");

    mensajeAgradecimiento.style.display = "none";

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Evitar la recarga de la página

        // Crear los datos del formulario
        const formData = new FormData(form);

        try {
            // Enviar los datos a FormSubmit
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                // Mostrar mensaje de agradecimiento
                form.style.display = "none";
                mensajeAgradecimiento.style.display = "flex";
                form.reset();
            } else {
                throw new Error("Error al enviar el formulario");
            }
        } catch (error) {
            alert("Hubo un problema al enviar el formulario. Inténtalo nuevamente.");
        }
    });

    botonOtraConsulta.addEventListener("click", () => {
        mensajeAgradecimiento.style.display = "none";
        form.style.display = "flex";
    });
});
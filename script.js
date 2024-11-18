// Selecciona todos los elementos de cabecera del acordeón
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        // Cierra todas las secciones abiertas
        headers.forEach(h => {
            if (h !== header) {
                h.classList.remove('active');
                h.nextElementSibling.style.display = 'none';
            }
        });
        
        // Alterna la sección actual
        header.classList.toggle('active');
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-card-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;

            // Alternar la clase activa en el header
            header.classList.toggle("active");

            // Mostrar o colapsar el contenido
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Colapsar
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // Expandir
            }
        });
    });
});

//PARA REPRODUCIR VIDEO EN MOBILE AUTOMATICAMENTE:
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    video.muted = true; // Asegúrate de que esté silenciado
    video.play().catch(error => {
        console.log("El navegador bloqueó la reproducción automática:", error);
    });
});

    








//RESEÑAS---------------------------------------------------------------------------------
let index = 0;
const reseñas = document.querySelectorAll('.reseña');
const totalReseñas = reseñas.length;

function mostrarSiguienteReseña() {
    index = (index + 1) % totalReseñas;
    const carrusel = document.querySelector('.carrusel');
    // Desplazar el carrusel en el eje X según la tarjeta actual
    carrusel.style.transform = `translateX(-${(index * 100)}%)`;  // 100% porque las reseñas tienen margen
}

setInterval(mostrarSiguienteReseña, 3000);  // Cambiar cada 3 segundos

const track = document.querySelector('.carousel-track');
let scrollPosition = 0;
const speed = 1; // Ajusta la velocidad del carrusel

function scrollCarousel() {
    scrollPosition -= speed;
    track.style.transform = `translateX(${scrollPosition}px)`;

    // Cuando el primer logo sale completamente, lo mueve al final
    const firstLogo = track.firstElementChild;
    if (Math.abs(scrollPosition) >= firstLogo.offsetWidth + 30) { // 30 es el espacio entre logos
        scrollPosition = 0;
        track.appendChild(firstLogo);
    }
    requestAnimationFrame(scrollCarousel); // Llama a la función de desplazamiento continuamente
}

// Inicia el ciclo de desplazamiento
scrollCarousel();








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


//SCROLL AUTOMATICO
let sections = document.querySelectorAll('div[id^="section"]'); // Selecciona todos los div con id que empiecen con 'section'
let currentSection = 0; // Empezamos en la primera sección

// Función para mover a la siguiente sección
function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({
            behavior: 'smooth', // Desplazamiento suave
            block: 'start' // Desplazar la sección al principio de la pantalla
        });
        currentSection = index; // Actualizamos la sección actual
    }
}

// Detectar el evento de scroll
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) { // Scroll hacia abajo
        if (currentSection < sections.length - 1) {
            scrollToSection(currentSection + 1); // Mover a la siguiente sección
        }
    } else if (event.deltaY < 0) { // Scroll hacia arriba
        if (currentSection > 0) {
            scrollToSection(currentSection - 1); // Mover a la sección anterior
        }
    }
});



































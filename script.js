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
// Selección de todas las pantallas con las clases correspondientes
let screens = document.querySelectorAll('.screen0, .screen00, .screen1, .screen2, .screen3, .screen4, .screen5, .screen6, .screen7, .screen8'); // Ajustar según el número de pantallas
let currentIndex = 0;  // Índice de la pantalla actual

// Función para ir a la pantalla específica
function goToScreen(index) {
    if (index >= 0 && index < screens.length) {
        window.scrollTo({
            top: screens[index].offsetTop, // Desplaza hasta la posición de la pantalla
            behavior: 'smooth'  // Desplazamiento suave
        });
        currentIndex = index;  // Actualiza el índice de la pantalla actual
    }
}

// Detecta el desplazamiento de la rueda del mouse (scroll)
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Scroll hacia abajo: mover a la siguiente pantalla
        goToScreen(currentIndex + 1);
    } else {
        // Scroll hacia arriba: mover a la pantalla anterior
        goToScreen(currentIndex - 1);
    }
});

// Detectar el gesto de swipe en dispositivos móviles
let touchStartY = 0;
window.addEventListener('touchstart', function(event) {
    touchStartY = event.touches[0].clientY; // Guarda la posición inicial del toque
});

window.addEventListener('touchend', function(event) {
    const touchEndY = event.changedTouches[0].clientY; // Guarda la posición final del toque

    if (touchEndY < touchStartY) {
        // Si se desliza hacia abajo: mover a la siguiente pantalla
        goToScreen(currentIndex + 1);
    } else if (touchEndY > touchStartY) {
        // Si se desliza hacia arriba: mover a la pantalla anterior
        goToScreen(currentIndex - 1);
    }
});


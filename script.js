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





























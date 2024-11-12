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

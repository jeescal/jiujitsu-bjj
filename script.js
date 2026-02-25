let currentSlide = 0;

function moveSlide(direction) {
    const wrapper = document.getElementById('carousel');
    const slides = document.querySelectorAll('#carousel img');
    const total = slides.length;

    currentSlide = (currentSlide + direction + total) % total;
    
    // El movimiento se basa en el ancho del contenedor (100%)
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-play opcional
setInterval(() => moveSlide(1), 5000);

// Asegurarse de que el menú móvil funcione
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if(menuBtn) {
        menuBtn.onclick = () => navLinks.classList.toggle('active');
    }
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector("#lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    // Clone items for infinite scroll
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        gallery.appendChild(item.cloneNode(true));
    });

    // Lightbox functionality
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Pause animation on hover
    gallery.addEventListener('mouseenter', () => {
        gallery.style.animationPlayState = 'paused';
    });

    gallery.addEventListener('mouseleave', () => {
        gallery.style.animationPlayState = 'running';
    });
});
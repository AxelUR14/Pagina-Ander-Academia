document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    let currentIndex = 0;

    // Función para mover el carousel
    function moveCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Evento para el botón "Siguiente"
    nextButton.addEventListener("click", function () {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al principio
        }
        moveCarousel();
    });

    // Evento para el botón "Anterior"
    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; // Vuelve al final
        }
        moveCarousel();
    });
});
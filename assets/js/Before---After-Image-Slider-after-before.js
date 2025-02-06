document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const beforeImage = document.querySelector('.image-container.before img');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const infoTexts = document.querySelectorAll('.info-text');

    let isDragging = false;

    // Eventos de ratón
    slider.addEventListener('mousedown', (e) => startDrag(e));
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => drag(e));

    // Eventos táctiles (móviles)
    slider.addEventListener('touchstart', (e) => startDrag(e));
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('touchmove', (e) => drag(e));

    function startDrag(event) {
        isDragging = true;
        hideInfoTexts();
    }

    function drag(event) {
        if (!isDragging) return;

        let clientX;
        if (event.touches) {
            clientX = event.touches[0].clientX; // Detecta toque en móvil
        } else {
            clientX = event.clientX; // Detecta movimiento de mouse
        }

        const rect = sliderWrapper.getBoundingClientRect();
        const offsetX = clientX - rect.left;

        const percentage = Math.max(0, Math.min(offsetX / rect.width, 1));
        const sliderPosition = percentage * 100;

        slider.style.left = `${sliderPosition}%`;
        beforeImage.style.clip = `rect(0, ${percentage * rect.width}px, 400px, 0)`;
    }

    function hideInfoTexts() {
        infoTexts.forEach(text => text.classList.add('hidden'));
    }
});

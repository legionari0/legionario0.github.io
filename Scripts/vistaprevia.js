document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('.preview-video');
    container.addEventListener('mouseenter', () => {
        video.play();
    });
    container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reinicia el vídeo al salir
    });
});

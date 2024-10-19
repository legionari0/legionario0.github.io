// Reproducir video al hacer clic en la miniatura
const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach(item => {
    item.addEventListener('click', () => {
        const videoUrl = item.getAttribute('data-video-url');
        const videoPlayer = document.createElement('video');
        videoPlayer.src = videoUrl;
        videoPlayer.controls = true;
        videoPlayer.autoplay = true;

        // Inserta el video bajo la miniatura
        item.appendChild(videoPlayer);
    });
});
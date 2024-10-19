// main.js
document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');
    
    fetch('data/videos.json')
        .then(response => response.json())
        .then(data => {
            data.videos.forEach(video => {
                // Crear el contenedor del video
                const videoContainer = document.createElement('div');
                videoContainer.classList.add('video-container');

                // Crear el elemento de video
                const videoElement = document.createElement('video');
                videoElement.classList.add('preview-video');
                videoElement.src = video.url;
                videoElement.controls = false; // Desactivar los controles en previsualización

                // Añadir eventos para la reproducción en hover
                videoContainer.addEventListener('mouseenter', () => {
                    videoElement.play();
                });

                videoContainer.addEventListener('mouseleave', () => {
                    videoElement.pause();
                    videoElement.currentTime = 0;
                });

                // Añadir el video al contenedor
                videoContainer.appendChild(videoElement);
                videoList.appendChild(videoContainer);
            });
        })
        .catch(error => console.error('Error al cargar los vídeos:', error));
});

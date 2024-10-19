document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
    const sideMenu = document.getElementById('side-menu');
    const menuToggle = document.getElementById('menu-toggle');

    // Cargar videos desde videos.json
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            data.videos.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.classList.add('video');
                videoElement.innerHTML = `
                    <img src="${video.thumbnail}" alt="${video.title}" onclick="playVideo('${video.url}')">
                    <p>${video.title}</p>
                `;
                videoContainer.appendChild(videoElement);
            });
        });

    // Mostrar/ocultar menú lateral
    menuToggle.addEventListener('click', () => {
        sideMenu.style.display = sideMenu.style.display === 'none' ? 'block' : 'none';
    });
});

// Función para reproducir el video
function playVideo(url) {
    window.location.href = `video.html?video=${encodeURIComponent(url)}`;
}

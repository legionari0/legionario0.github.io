// Función para alternar la visibilidad del menú lateral
document.getElementById("menu-toggle").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden"); // Cambia la clase para mostrar u ocultar el menú
});

// Función para reproducir el video al hacer clic en la miniatura
function playVideo(videoSrc) {
    const videoPlayer = document.getElementById("video-player");
    videoPlayer.src = videoSrc; // Establece la fuente del video
    videoPlayer.play(); // Reproduce el video
}

// Opcional: Puedes agregar más funcionalidad aquí, como detener el video al cerrar el menú
document.getElementById("sidebar").addEventListener("click", function() {
    const videoPlayer = document.getElementById("video-player");
    if (!videoPlayer.paused) {
        videoPlayer.pause(); // Detiene el video si se cierra el menú
    }
});

document.getElementById("menu-toggle").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
});

function playVideo(videoSrc) {
    const videoPlayer = document.getElementById("video-player");
    videoPlayer.src = videoSrc;
    videoPlayer.play();
}

document.addEventListener('DOMContentLoaded', loadVideos);

function loadVideos() {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            const videoList = document.querySelector('.video-list');
            data.videos.forEach(video => {
                const videoContainer = document.createElement('div');
                videoContainer.classList.add('video-container');
                
                const thumbnail = document.createElement('img');
                thumbnail.src = video.thumbnail;
                thumbnail.classList.add('thumbnail');
                thumbnail.alt = video.title;
                thumbnail.onclick = () => {
                    window.location.href = video.url;
                };

                const title = document.createElement('p');
                title.textContent = video.title;

                videoContainer.appendChild(thumbnail);
                videoContainer.appendChild(title);
                videoList.appendChild(videoContainer);
            });
        })
        .catch(error => console.error('Error loading videos:', error));
}

fetch('data/videos.json') // Cambiado a la nueva ubicación
    .then(response => response.json())
    .then(data => {
        const videoList = document.getElementById('video-list');
        data.forEach(video => {
            const container = document.createElement('div');
            container.classList.add('video-container');
            container.innerHTML = `
                <a href="video.html?id=${video.id}">
                    <video class="preview-video" src="${video.videoUrl}" muted loop></video>
                    <h2>${video.title}</h2>
                </a>
            `;
            videoList.appendChild(container);
        });
    })
    .catch(error => console.error('Error loading video data:', error));

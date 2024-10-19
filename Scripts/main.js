// Elementos del DOM
const videoList = document.getElementById('video-list');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const sidebar = document.getElementById('sidebar');
const hamburgerButton = document.getElementById('hamburger-button');

// Cargar videos desde un archivo JSON
fetch('data/videos.json')
  .then(response => response.json())
  .then(videos => {
    videos.forEach(video => {
      const videoContainer = document.createElement('div');
      videoContainer.classList.add('video-container');
      
      videoContainer.innerHTML = `
        <video src="${video.src}" class="preview-video" muted></video>
        <h3>${video.title}</h3>
      `;
      
      videoContainer.addEventListener('click', () => {
        window.location.href = `video.html?id=${video.id}`; // Redireccionar a la página del video
      });

      videoList.appendChild(videoContainer);
    });
  })
  .catch(error => console.error('Error al cargar los videos:', error));

// Mostrar/ocultar el menú lateral
hamburgerButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Filtrar videos
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const videos = document.querySelectorAll('.video-container');

  videos.forEach(video => {
    const title = video.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      video.style.display = 'block';
    } else {
      video.style.display = 'none';
    }
  });
});

// Vista previa del video al pasar el cursor
document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('.preview-video');
  container.addEventListener('mouseenter', () => {
    video.play();
  });
  container.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Reinicia el video al salir
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleMenuButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    toggleMenuButton.addEventListener('click', () => {
        // Alternar visibilidad del menú
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});

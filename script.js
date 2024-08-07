document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#photos .gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            alert('Вы кликнули на изображение: ' + img.alt);
        });
    });
});

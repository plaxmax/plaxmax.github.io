document.addEventListener("DOMContentLoaded", function() {
    var parallaxSection = document.getElementById("parallaxSection");
    var images = ["img/cat.jpg", "img/cat2.jpg", "img/fon1.jpeg"]; // Lista de nombres de las imágenes
    var currentIndex = 0;

    function changeBackground() {
        // Cambiar la imagen de fondo
        parallaxSection.style.backgroundImage = "url('" + images[currentIndex] + "')";

        // Incrementar el índice o reiniciarlo si llegamos al final de la lista
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Cambiar la imagen cada 5 segundos (5000 milisegundos)
    setInterval(changeBackground, 5000);
});
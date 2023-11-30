document.addEventListener("DOMContentLoaded", function () {
    // Отримати всі елементи слайдів
    var slides = document.querySelectorAll(".slide");
    
    // Індекс поточного слайду
    var currentSlide = 0;

    // Функція для зміни слайду
    function changeSlide() {
        // Приховати всі слайди
        slides.forEach(function (slide) {
            slide.style.display = "none";
        });

        // Збільшити індекс для показу наступного слайду
        currentSlide = (currentSlide + 1) % slides.length;

        // Показати поточний слайд
        slides[currentSlide].style.display = "block";
    }

    // Змінювати слайд кожні 3 секунди
    setInterval(changeSlide, 3000);
});
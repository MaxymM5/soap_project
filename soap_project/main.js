document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll(".slide");
    
    var currentSlide = 0;

    function changeSlide() {
        slides.forEach(function (slide) {
            slide.classList.remove("visible");
        });

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("visible");
    }

    setInterval(changeSlide, 3000);
});

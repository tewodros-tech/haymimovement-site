document.addEventListener("DOMContentLoaded", () => {
  // Donation type toggle
  const buttons = document.querySelectorAll(".donation-type");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Carousel initialization
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-image");

  function rotateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      if (index === currentSlide) {
        slide.classList.add("active");
      }
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }

  if (slides.length > 0) {
    rotateSlides(); // Show first slide immediately
    setInterval(rotateSlides, 4000);
  }
});



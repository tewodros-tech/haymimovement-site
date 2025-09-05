document.addEventListener("DOMContentLoaded", () => {
  // Donation type toggle
  const donationButtons = document.querySelectorAll(".donation-type");

  if (donationButtons.length > 0) {
    donationButtons.forEach(button => {
      button.addEventListener("click", () => {
        donationButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  }

  // Carousel initialization
  const slides = document.querySelectorAll(".carousel-image");
  let currentSlide = 0;

  function rotateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }

  if (slides.length > 0) {
    rotateSlides(); // Show first slide immediately
    setInterval(rotateSlides, 4000); // Rotate every 4 seconds
  }
});

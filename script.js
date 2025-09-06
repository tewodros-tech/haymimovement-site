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

  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
  const navMobile = document.getElementById("nav-mobile");
  const overlay = document.getElementById("menu-overlay");

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMobile.classList.toggle("show");
    overlay.classList.toggle("show");
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Optional: Carousel placeholder
  const slides = document.querySelectorAll(".carousel-image");
  let currentSlide = 0;

  function rotateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }

  if (slides.length > 0) {
    rotateSlides();
    setInterval(rotateSlides, 4000);
  }
});

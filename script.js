document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".donation-type");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

function setLanguage(lang) {
  const content = {
    en: {
      headline: "We’re changing the world.",
      subtext: "No matter the industry, we’re breaking down barriers that hold women back.",
      mission: "Haymimovement.org is ready to keep girls learning during and after the crisis."
    },
    am: {
      headline: "እኛ ዓለምን እንቀየራለን።",
      subtext: "በማንኛውም ኢንዱስትሪ ውስጥ ሴቶችን የሚያወርዱ እንቅስቃሴዎችን እንደመለስን።",
      mission: "Haymimovement.org በአሁኑና በኋላ ወቅት ልጆችን እንዲቀጥሉ ተዘጋጅቷል።"
    }
  };

  document.querySelector(".hero-text h1").textContent = content[lang].headline;
  document.querySelector(".hero-text p").textContent = content[lang].subtext;
  document.querySelector(".donation-form p:nth-of-type(2)").textContent = content[lang].mission;
}
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

setInterval(rotateSlides, 4000);


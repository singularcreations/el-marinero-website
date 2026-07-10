const slides = Array.from(document.querySelectorAll(".hero-slider .slide")).slice(1);
const dots = Array.from(document.querySelectorAll(".dot"));
let activeSlide = 0;
let sliderTimer;

function showSlide(index) {
  activeSlide = index;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
  });
}

function startSlider() {
  window.clearInterval(sliderTimer);
  sliderTimer = window.setInterval(() => {
    showSlide((activeSlide + 1) % slides.length);
  }, 5200);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    startSlider();
  });
});

showSlide(0);
startSlider();

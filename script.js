const sliderContainer = document.querySelector(".slider__content");
const prevBtn = document.querySelector(".slider__arrow_prew");
const nextBtn = document.querySelector(".slider__arrow_next");
const slides = document.querySelectorAll(".slider__item");
let currentIndex = 0;

slides[currentIndex].classList.add("active");

function showSlide(index) {
  slides[currentIndex].classList.remove("active");
  slides[index].classList.toggle("active");
  currentIndex = index;
}

function prevSlide() {
  let index = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(index);
}

function nextSlide() {
  let index = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(index);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);


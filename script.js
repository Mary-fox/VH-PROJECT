//slider

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

//burger
const body = document.body;
const blackLayer = document.querySelector('.black-layer')
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const closePopup = document.querySelector(".popup__close")

// Дубликат nav, для создания новых стилей
const menu = document.querySelector(".nav__list").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  blackLayer.classList.toggle('black-layer_active');
  renderBurger();
}

//Рендер элементов
function renderBurger() {
  popup.appendChild(menu);
}

function closeRemove() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
  blackLayer.classList.remove('black-layer_active');
}
//Закрытие при клике на затемненную область
blackLayer.addEventListener('click', () => {
  closeRemove();
})
//Закрытие при клике на меню
menu.addEventListener('click', () => {
  closeRemove();
})
closePopup.addEventListener('click', () => {
  closeRemove();
})
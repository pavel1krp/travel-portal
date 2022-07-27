const buttons = document.querySelectorAll('.slider__button');
const sliderImages = document.querySelectorAll('.slider__image');
const sliderItems = document.querySelector('.slider-images-wrapper');

buttons[1].classList.add('active');

sliderImages.forEach(el => el.addEventListener('click', changeImage));
buttons.forEach(el => el.addEventListener('click', changeImage));
function changeImage(event) {
  buttons.forEach(el => el.classList.remove('active'));

  if (event.target === buttons[0] || event.target === sliderImages[0]) {
    sliderItems.style.transform = "translateX(860px)";
    buttons[0].classList.add('active');
  };
  if (event.target === buttons[1] || event.target === sliderImages[1]) {
    sliderItems.style.transform = "translateX(0px)";
    buttons[1].classList.add('active');
  };
  if (event.target === buttons[2] || event.target === sliderImages[2]) {
    sliderItems.style.transform = "translateX(-860px)";
    buttons[2].classList.add('active');
  };
};
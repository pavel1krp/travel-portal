const SLIDE_AREA = document.querySelector('.slider__slide-area');
const SLIDER_BUTTONS = document.querySelectorAll('.slider__button');
const SLIDER_DOTS = document.querySelectorAll('.slider__dot');

let dotCount = 1;

SLIDER_DOTS[1].classList.add('active');

SLIDER_BUTTONS.forEach(el => el.addEventListener('click', moveSlider));

function moveSlider() {
  const SLIDES = [...document.querySelectorAll('.slider-image-wrapper')];

  SLIDER_DOTS.forEach(dot => dot.classList.remove('active'));
  SLIDER_BUTTONS.forEach(el => el.removeEventListener('click', moveSlider));
  
  //slide to left
  if (this.innerHTML === '⮜') {
    SLIDES.push(SLIDES[SLIDES.length - 1]);
    SLIDE_AREA.prepend(SLIDES[SLIDES.length - 1]);

    SLIDE_AREA.style.animation = '.4s moveLeft forwards';

    //keep track of active dot position
    if (dotCount === 0) {
      dotCount = 2;
    } else {
      dotCount --;
    };
    SLIDER_DOTS[dotCount].classList.add('active');
  };

  //slide to right
  if (this.innerHTML === '⮞') {
    SLIDES.push(SLIDES[0]);
    SLIDE_AREA.appendChild(SLIDES[0]);

    SLIDE_AREA.style.animation = '.4s moveRight forwards';

    if (dotCount === 2) {
      dotCount = 0;
    } else {
      dotCount ++;
    };
    SLIDER_DOTS[dotCount].classList.add('active');
  };
  
  setTimeout(() => {
    SLIDE_AREA.style.animation = 'none';
    SLIDER_BUTTONS.forEach(el => el.addEventListener('click', moveSlider));
  }, 400)
};
const SLIDE_AREA = document.querySelector('.slider__slide-area');
const SLIDER_BUTTONS = document.querySelectorAll('.slider__button');
const SLIDER_DOTS = document.querySelectorAll('.slider__dot');

//active dot counter
let dotCount = 1;
SLIDER_DOTS[1].classList.add('active');

SLIDER_BUTTONS.forEach(el => el.addEventListener('click', moveSlider));
function moveSlider() {
  //after every click reinitialize position of elements
  const SLIDES = [...document.querySelectorAll('.slider-image-wrapper')];

  //reset dots
  SLIDER_DOTS.forEach(dot => dot.classList.remove('active'));
  //remove click on left/right buttons
  SLIDER_BUTTONS.forEach(el => el.removeEventListener('click', moveSlider));
  
  //slide to left
  if (this.innerHTML === '⮜') {
    //prepend last element of the array
    SLIDE_AREA.prepend(SLIDES[SLIDES.length - 1]);

    //animate
    SLIDE_AREA.style.animation = '.4s moveLeft forwards';

    //keep track of active dot position
    if (dotCount === 0) {
      //if first, make it last
      dotCount = 2;
    } else {
      dotCount --;
    };
    //highlight active dot
    SLIDER_DOTS[dotCount].classList.add('active');
  };

  //slide to right
  if (this.innerHTML === '⮞') {
    //append first element of the array
    SLIDE_AREA.appendChild(SLIDES[0]);

    SLIDE_AREA.style.animation = '.4s moveRight forwards';

    if (dotCount === 2) {
      //if last, make it first
      dotCount = 0;
    } else {
      dotCount ++;
    };
    SLIDER_DOTS[dotCount].classList.add('active');
  };
  
  setTimeout(() => {
    //reset animation
    SLIDE_AREA.style.animation = 'none';
    //return click on left/right buttons
    SLIDER_BUTTONS.forEach(el => el.addEventListener('click', moveSlider));
  }, 400)
};
const buttons = document.querySelectorAll('.slider__button');
const sliderItems = document.querySelector('.slider__items')
buttons[1].classList.add('active')
buttons.forEach( el=> el.addEventListener('click',changeImage))
function changeImage(event){
  buttons.forEach(el => el.classList.remove('active'));
  if(event.target === buttons[0]){
    sliderItems.style.transform = "translateX(860px)";
    buttons[0].classList.add('active');
    console.log(event.target)
  }
  if(event.target === buttons[1]){
    sliderItems.style.transform = "translateX(0px)";
    buttons[1].classList.add('active');
    console.log(event.target)
  }
  if(event.target === buttons[2]){
    sliderItems.style.transform = "translateX(-860px)";
    buttons[2].classList.add('active');
    console.log(event.target)
  }
}
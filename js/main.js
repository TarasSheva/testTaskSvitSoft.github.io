// MENU
const menu = document.querySelector('.header-button');
const menuBlock = document.querySelector('.menu');
menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuBlock.classList.toggle('acty');
});

// SLIDER
const windowSlider = document.querySelector('.slider');
const slider = document.querySelector('.page-bottom');
const nums = document.querySelectorAll('.dot');
console.log(nums);

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(slideIndex) {
  let slides = document.getElementsByClassName('page-bottom');

  let prev = document.querySelector('.page-paralell-left');
  prev.onclick = function () {
    slideIndex--;
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    showSlides(slideIndex);
  };
  let next = document.querySelector('.page-paralell-right');
  next.onclick = function () {
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    showSlides(slideIndex);
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    nums[i].className = nums[i].className.replace('active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  nums[slideIndex - 1].classList += ' active';

  [].forEach.call(nums, function (elem) {
    elem.onclick = function () {
      let n = +this.getAttribute('id');
      showSlides(n + 1);
    };
  });
}

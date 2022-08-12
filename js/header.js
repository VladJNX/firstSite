let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');

function active() {
   let headerBurger = document.querySelector('.header__burger');
   let headerMenu = document.querySelector('.header__menu');
   
   headerMenu.classList.toggle('_active');
   headerBurger.classList.toggle('_active');
}

headerBurger.addEventListener("click", active)
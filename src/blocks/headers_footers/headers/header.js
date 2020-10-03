const { event } = require("jquery");

const burgerMenu = document.querySelector('.header .btn_burger-menu'),
   closeButton = document.querySelector('.header .btn_close-menu'),
   mobileMenu = document.querySelector('.header_mobile_navbar__block'),
   loginBlock = document.querySelector('.header .navbar_login__block');
   

burgerMenu.addEventListener('click', () => {
   mobileMenu.classList.toggle('display-none');
   loginBlock.classList.toggle('display-none');
} )

closeButton.addEventListener('click', () => {
   mobileMenu.classList.toggle('display-none');
   loginBlock.classList.toggle('display-none');
} )
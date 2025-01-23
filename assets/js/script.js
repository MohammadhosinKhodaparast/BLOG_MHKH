const nav = document.querySelector(".mobile-nav"),
  navMenuBtn = document.querySelector(".nav-menu-btn"),
  navCloseBtn = document.querySelector(".nav-close-btn");


const navToggleFunc = () => nav.classList.toggle("active");
navMenuBtn.addEventListener('click' ,navToggleFunc);
navCloseBtn.addEventListener('click' ,navToggleFunc);



















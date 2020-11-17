//* Hamburger menu

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav.nav--active a.link");

const handleClick = () => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("nav--active");
};

burger.addEventListener("click", handleClick);

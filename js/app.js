const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav.nav--active a.link");

const handleClick = () => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("nav--active");
};

// const reloadCss = () => {
//   var links = document.getElementsByTagName("link");
//   for (var cl in links) {
//     var link = links[cl];
//     if (link.rel === "stylesheet") link.href += "";
//   }
// };

burger.addEventListener("click", handleClick);

// window.addEventListener("resize", reloadCss);

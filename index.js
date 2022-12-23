const burgerBar = document.getElementById("burgerBar");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelector(".nav-item");

burgerBar.addEventListener("click", toggler);

function toggler() {
  burgerBar.classList.toggle("close-bar");
  nav.classList.toggle("close-bar");
  navList.classList.toggle("close-bar");
}

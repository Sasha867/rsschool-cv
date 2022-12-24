const burgerBar = document.getElementById("burgerBar");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const listSkills = document.getElementById("list-skills");

console.log(listSkills);
console.log(typeof navItems);

burgerBar.addEventListener("click", toggler);

function toggler() {
  burgerBar.classList.toggle("close-bar");
  nav.classList.toggle("close-bar");
  navList.classList.toggle("close-bar");
  listSkills.classList.toggle("close-bar");
}

function closeBar() {
  setTimeout(() => {
    burgerBar.classList.remove("close-bar");
    nav.classList.remove("close-bar");
    navList.classList.remove("close-bar");
    listSkills.classList.remove("close-bar");
  }, 500);
}

navItems.forEach((el) => el.addEventListener("click", closeBar));

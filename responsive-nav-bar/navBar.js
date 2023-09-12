const menuIcon = document.querySelector(".menu-icon");
const navbarListItems = document.querySelectorAll(".navbar__list-item");

const toggleMenu = () => {
  navbarListItems.forEach((item) => item.classList.toggle("open"));
};

menuIcon.addEventListener("click", toggleMenu);

const menuIcon = document.querySelector(".menu-icon");
const sideNav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".close-btn");
const sideNavPush = document.querySelector(".sidenav-push");
const sideNavFullWidth = document.querySelector(".sidenav-full-width");
const container = document.querySelector(".container");

const toggleSideNav = () => {
  // sideNav.classList.toggle("show");
  // sideNavPush.classList.toggle("show2");
  // container.classList.toggle("container-push");
  sideNavFullWidth.classList.toggle("sidenav-full-width-expanded");
};

menuIcon.addEventListener("click", toggleSideNav);
closeBtn.addEventListener("click", toggleSideNav);
document
  .querySelectorAll(".close-btn2")[1]
  .addEventListener("click", toggleSideNav);

const menuIcon = document.querySelector(".menu-icon");
const sideNav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".close-btn");

const toggleSideNav = () => {
  sideNav.classList.toggle("animate");
};

menuIcon.addEventListener("click", toggleSideNav);
closeBtn.addEventListener("click", toggleSideNav);

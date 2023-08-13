let animatedMenuIcon = document.querySelector(".animated-menu-icon");

const toggleClass = (elem, _name) => {
  elem.classList.toggle(_name);
};
const toggleMenu = () => {
  let menuLines = animatedMenuIcon.querySelectorAll(".menu-line");
  toggleClass(menuLines[0], "forward-slash");
  toggleClass(menuLines[1], "hidden");
  toggleClass(menuLines[2], "backward-slash");
};

animatedMenuIcon.addEventListener("click", toggleMenu);

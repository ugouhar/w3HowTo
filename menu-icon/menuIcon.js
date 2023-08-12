let animatedMenuIcon = document.querySelector(".animated-menu-icon");

const addRemoveClass = (elem, _name) => {
  if (elem.classList.contains(_name)) {
    elem.classList.remove(_name);
  } else {
    elem.classList.add(_name);
  }
  return elem;
};
const toggleMenu = () => {
  let menuLines = animatedMenuIcon.querySelectorAll(".menu-line");
  menuLines[0] = addRemoveClass(menuLines[0], "forward-slash");
  menuLines[1] = addRemoveClass(menuLines[1], "hidden");
  menuLines[2] = addRemoveClass(menuLines[2], "backward-slash");
};

animatedMenuIcon.addEventListener("click", toggleMenu);

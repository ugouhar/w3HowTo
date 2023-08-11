const addActiveClass = (icons, index) => {
  icons[index].classList.add("active");
};

const addInActiveClass = (icons, index) => {
  icons[index].classList.add("inactive");
};

const removeActiveClass = (icons, index) => {
  icons[index].classList.remove("active");
};

const removeInActiveClass = (icons, index) => {
  icons[index].classList.remove("inactive");
};

const addAndRemoveClass = (icons, index) => {
  for (let i = 0; i < icons.length; i++) {
    if (i == index) {
      addActiveClass(icons, i);
      removeInActiveClass(icons, i);
    } else {
      addInActiveClass(icons, i);
      removeActiveClass(icons, i);
    }
  }
};

const attachEventListener = () => {
  let iconBar = document.querySelector(".icon-bar");
  let icons = iconBar.querySelectorAll("a");
  icons.forEach((icon, index) => {
    icon.addEventListener("click", () => addAndRemoveClass(icons, index));
  });
};

attachEventListener();

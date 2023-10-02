const showButton = document.querySelector("#show-backdrop");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close");

const toggleBackDrop = () => {
  backdrop.classList.toggle("show");
};

showButton.addEventListener("click", toggleBackDrop);
backdrop.addEventListener("click", toggleBackDrop);

let buttonColors = ["#f44336", "#04AA6D", "#2196F3", "#ff5722"];
let defaultColor = "#f1f0f0";
let defaultBackgroundColor = "#aaa";
let buttons = document.querySelectorAll(".button");
let contents = document.querySelectorAll(".content");

function switchTab(index) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
    buttons[i].style.background = defaultColor;

    contents[i].classList.remove("active");
    contents[i].style.background = defaultBackgroundColor;
  }
  buttons[index].classList.add("active");
  buttons[index].style.background = buttonColors[index];
  contents[index].classList.add("active");
  contents[index].style.background = buttonColors[index];

  contents.forEach((content) => content.classList.add("hidden"));
  contents[index].classList.remove("hidden");
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => switchTab(index));
});

buttons[0].click();

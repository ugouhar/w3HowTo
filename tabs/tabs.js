let tabs = document.querySelectorAll(".tab");
function switchTab(index) {
  let horizontalTabs = document.querySelector(".horizontal-tabs");

  tabs.forEach((tab) => tab.classList.remove("active"));
  tabs[index].classList.add("active");

  let contents = horizontalTabs.querySelectorAll(".content");
  contents.forEach((content) => content.classList.add("hidden"));
  contents[index].classList.remove("hidden");
}

tabs.forEach((tab, index) =>
  tab.addEventListener("click", () => switchTab(index))
);

document.querySelectorAll(".close").forEach((closeBtn) =>
  closeBtn.addEventListener("click", function () {
    this.parentElement.classList.add("hidden");
  })
);

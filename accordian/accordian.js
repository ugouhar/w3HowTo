let sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  section.addEventListener("click", () => {
    let heading = section.querySelector(".heading");
    heading.classList.toggle("expanded");

    let expandButton = heading.querySelectorAll("div")[1];
    let text = expandButton.innerText;
    expandButton.innerText = text == "+" ? "-" : "+";

    let content = section.querySelector(".content");
    content.classList.toggle("show");
  });
});

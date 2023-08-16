let sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  section.addEventListener("click", () => {
    let heading = section.querySelector(".heading");
    heading.classList.toggle("expanded");
    heading.classList.toggle("collapsed");

    let content = section.querySelector(".content");
    content.classList.toggle("show");
  });
});

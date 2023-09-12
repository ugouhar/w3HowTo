const filterResultContainer = document.querySelector(".filter-menu__results");
const filteredItem = filterResultContainer.querySelectorAll("a");
const filterInputBox = document.getElementById("filter-input-box");

const isSubstring = (substr, str) => {
  const len = substr.length;
  for (let i = 0; i < str.length - len + 1; i++) {
    const a = str.substring(i, i + len).toLowerCase();
    const b = substr.toLowerCase();
    if (a == b) return true;
  }
  return false;
};

const isSubstring2 = (substr, str) =>
  str.toLowerCase().includes(substr.toLowerCase());

filterInputBox.addEventListener("keyup", () => {
  filteredItem.forEach((item) => {
    let itemText = item.innerText;
    let searchText = filterInputBox.value;
    if (isSubstring2(searchText, itemText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

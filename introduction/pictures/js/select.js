document.addEventListener("DOMContentLoaded", () => {
  // ボタンにイベントリスナーを設定
  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-tag");
      filterElements(tag);
    });
  });
});

function filterElements(tag) {
  const elements = document.querySelectorAll(".element");
  elements.forEach((element) => {
    const tags = element.getAttribute("data-tags").split(" ");
    if (tags.includes(tag)) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}

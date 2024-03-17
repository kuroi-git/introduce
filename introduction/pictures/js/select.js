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

$(function () {
  var $demo1 = $(".js-demo01"); //コンテナとなる要素を指定

  $demo1.imagesLoaded(function () {
    //imagesLoadedを使用し、画像が読み込みまれた段階でMasonryの関数を実行させる
    //Masonryの関数↓
    $demo1.masonry({
      //オプション指定箇所
      itemSelector: ".js-item", //コンテンツを指定
      columnWidth: 205, //カラム幅を設定
      fitWidth: true, //コンテンツ数に合わせ親の幅を自動調整
    });
  });
});

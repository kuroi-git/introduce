// モーダルウィンドウとボタン、クローズアイコンの要素を取得
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");

// ボタンがクリックされた時にモーダルを表示
btn.onclick = function () {
  modal.style.display = "block";
};

// ×（クローズアイコン）がクリックされた時にモーダルを非表示
span.onclick = function () {
  modal.style.display = "none";
};

// モーダルの外側をクリックした時にモーダルを非表示
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

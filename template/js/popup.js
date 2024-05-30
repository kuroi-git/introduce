//要素を取得
const modal = document.querySelector('.js-modal'),
      open = document.querySelector('.js-modal-open'),
      close = document.querySelector('.js-modal-close');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
  modal.classList.add('is-active');
}
open.addEventListener('click', modalOpen);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
  modal.classList.remove('is-active');
}
close.addEventListener('click', modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(e) {
  if (e.target == modal) {
    modal.classList.remove('is-active');
  }
}
addEventListener('click', modalOut);





//要素を取得
const modal1 = document.querySelector('.js-modal1'),
      open1 = document.querySelector('.js-modal-open1'),
      close1 = document.querySelector('.js-modal-close1');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen1() {
  modal1.classList.add('is-active');
}
open1.addEventListener('click', modalOpen1);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose1() {
  modal1.classList.remove('is-active');
}
close1.addEventListener('click', modalClose1);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut1(e) {
  if (e.target == modal1) {
    modal1.classList.remove('is-active');
  }
}
addEventListener('click', modalOut1);
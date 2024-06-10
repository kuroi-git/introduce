// https://qiita.com/limemint/questions/2d2240078658a0a5b8ed


//要素を取得
const modal_basic = document.querySelector('.js-modal_basic'),
      open_basic = document.querySelector('.js-modal-open_basic'),
      close_basic = document.querySelector('.js-modal-close_basic');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_basic() {
  modal_basic.classList.add('is-active');
}
open_basic.addEventListener('click', modalOpen_basic);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_basic() {
  modal_basic.classList.remove('is-active');
}
close_basic.addEventListener('click', modalClose_basic);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_basic(e) {
  if (e.target == modal_basic) {
    modal_basic.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_basic);


//要素を取得
const modal_personality = document.querySelector('.js-modal_personality'),
      open_personality = document.querySelector('.js-modal-open_personality'),
      close_personality = document.querySelector('.js-modal-close_personality');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_personality() {
  modal_personality.classList.add('is-active');
}
open_personality.addEventListener('click', modalOpen_personality);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_personality() {
  modal_personality.classList.remove('is-active');
}
close_personality.addEventListener('click', modalClose_personality);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_personality(e) {
  if (e.target == modal_personality) {
    modal_personality.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_personality);


//要素を取得
const modal_hobby = document.querySelector('.js-modal_hobby'),
      open_hobby = document.querySelector('.js-modal-open_hobby'),
      close_hobby = document.querySelector('.js-modal-close_hobby');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_hobby() {
  modal_hobby.classList.add('is-active');
}
open_hobby.addEventListener('click', modalOpen_hobby);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_hobby() {
  modal_hobby.classList.remove('is-active');
}
close_hobby.addEventListener('click', modalClose_hobby);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_hobby(e) {
  if (e.target == modal_hobby) {
    modal_hobby.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_hobby);





//要素を取得
const modal_achieve = document.querySelector('.js-modal_achieve'),
      open_achieve = document.querySelector('.js-modal-open_achieve'),
      close_achieve = document.querySelector('.js-modal-close_achieve');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_achieve() {
  modal_achieve.classList.add('is-active');
}
open_achieve.addEventListener('click', modalOpen_achieve);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_achieve() {
  modal_achieve.classList.remove('is-active');
}
close_achieve.addEventListener('click', modalClose_achieve);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_achieve(e) {
  if (e.target == modal_achieve) {
    modal_achieve.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_achieve);


//要素を取得
const modal_skill = document.querySelector('.js-modal_skill'),
      open_skill = document.querySelector('.js-modal-open_skill'),
      close_skill = document.querySelector('.js-modal-close_skill');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_skill() {
  modal_skill.classList.add('is-active');
}
open_skill.addEventListener('click', modalOpen_skill);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_skill() {
  modal_skill.classList.remove('is-active');
}
close_skill.addEventListener('click', modalClose_skill);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_skill(e) {
  if (e.target == modal_skill) {
    modal_skill.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_skill);


//要素を取得
const modal_qual = document.querySelector('.js-modal_qual'),
      open_qual = document.querySelector('.js-modal-open_qual'),
      close_qual = document.querySelector('.js-modal-close_qual');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_qual() {
  modal_qual.classList.add('is-active');
}
open_qual.addEventListener('click', modalOpen_qual);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_qual() {
  modal_qual.classList.remove('is-active');
}
close_qual.addEventListener('click', modalClose_qual);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_qual(e) {
  if (e.target == modal_qual) {
    modal_qual.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_qual);



//要素を取得
const modal_story = document.querySelector('.js-modal_story'),
      open_story = document.querySelector('.js-modal-open_story'),
      close_story = document.querySelector('.js-modal-close_story');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_story() {
  modal_story.classList.add('is-active');
}
open_story.addEventListener('click', modalOpen_story);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_story() {
  modal_story.classList.remove('is-active');
}
close_story.addEventListener('click', modalClose_story);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_story(e) {
  if (e.target == modal_story) {
    modal_story.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_story);



//要素を取得
const modal_career = document.querySelector('.js-modal_career'),
      open_career = document.querySelector('.js-modal-open_career'),
      close_career = document.querySelector('.js-modal-close_career');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_career() {
  modal_career.classList.add('is-active');
}
open_career.addEventListener('click', modalOpen_career);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_career() {
  modal_career.classList.remove('is-active');
}
close_career.addEventListener('click', modalClose_career);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_career(e) {
  if (e.target == modal_career) {
    modal_career.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_career);



//要素を取得
const modal_important = document.querySelector('.js-modal_important'),
      open_important = document.querySelector('.js-modal-open_important'),
      close_important = document.querySelector('.js-modal-close_important');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_important() {
  modal_important.classList.add('is-active');
}
open_important.addEventListener('click', modalOpen_important);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_important() {
  modal_important.classList.remove('is-active');
}
close_important.addEventListener('click', modalClose_important);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_important(e) {
  if (e.target == modal_important) {
    modal_important.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_important);


//要素を取得
const modal_dream = document.querySelector('.js-modal_dream'),
      open_dream = document.querySelector('.js-modal-open_dream'),
      close_dream = document.querySelector('.js-modal-close_dream');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_dream() {
  modal_dream.classList.add('is-active');
}
open_dream.addEventListener('click', modalOpen_dream);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_dream() {
  modal_dream.classList.remove('is-active');
}
close_dream.addEventListener('click', modalClose_dream);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_dream(e) {
  if (e.target == modal_dream) {
    modal_dream.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_dream);


//要素を取得
const modal_sns = document.querySelector('.js-modal_sns'),
      open_sns = document.querySelector('.js-modal-open_sns'),
      close_sns = document.querySelector('.js-modal-close_sns');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_sns() {
  modal_sns.classList.add('is-active');
}
open_sns.addEventListener('click', modalOpen_sns);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_sns() {
  modal_sns.classList.remove('is-active');
}
close_sns.addEventListener('click', modalClose_sns);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_sns(e) {
  if (e.target == modal_sns) {
    modal_sns.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_sns);


//要素を取得
const modal_templete = document.querySelector('.js-modal_templete'),
      open_templete = document.querySelector('.js-modal-open_templete'),
      close_templete = document.querySelector('.js-modal-close_templete');

//「開くボタン」をクリックしてモーダルを開く
function modalOpen_templete() {
  modal_templete.classList.add('is-active');
}
open_templete.addEventListener('click', modalOpen_templete);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose_templete() {
  modal_templete.classList.remove('is-active');
}
close_templete.addEventListener('click', modalClose_templete);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut_templete(e) {
  if (e.target == modal_templete) {
    modal_templete.classList.remove('is-active');
  }
}
addEventListener('click', modalOut_templete);
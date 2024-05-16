function filter(tag) {
  var items = document.getElementsByClassName('pic-tag');
  for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(tag)) {
        items[i].style.display = 'initial';
        items[i].style.height = 'auto !important'; /* 検証として高さは可変（auto）に設定しているだけです。実際は不要です。 */
        items[i].style.paddin = '5%';
        items[i].style.width = '100%';
      } else {
          items[i].style.display = 'none';
      }
  }
}

$('.masonry').masonry({
  itemSelector: '.masonry-item',
  gutter: 40,
  percentPosition: true
});
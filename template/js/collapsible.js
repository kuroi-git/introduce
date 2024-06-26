function toggleContent(id) {
  var content = document.getElementById(id);
  if (content.classList.contains('open')) {
      content.classList.remove('open');
  } else {
      content.classList.add('open');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let range = document.querySelector('.noUi-connect');

  document.querySelectorAll('.noUi-handle').forEach(e => {
    e.addEventListener('mousedown', () => range.style.backgroundColor = '#7033AC');
    e.addEventListener('mouseup', () => range.style.backgroundColor = '');
    e.addEventListener('focus', () => range.style.backgroundColor = '#7033AC');
    e.addEventListener('blur', () => range.style.backgroundColor = '');
  })
}())

document.querySelector('.rating__button').addEventListener('click', function() {
  document.querySelectorAll('.rating__card').forEach(function(el) {
    el.classList.add('list');
    document.querySelector('.rating__button').classList.remove('list');
  })
  
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.sort__btn').forEach(function (item) {
    item.addEventListener('click', (element) => {
      let a = item.parentElement.querySelector('.sort__list');
      a.classList.toggle('sort__menu-active');
      item.classList.toggle('sort__btn-active');
      document.querySelectorAll('.sort__list').forEach(element => {
        if (a != element) {
          element.classList.remove('sort__menu-active');
        }
      })
      document.querySelectorAll('.sort__btn').forEach(function (el) {
        if (item != el) {
          el.classList.remove('sort__btn-active');
        }
      })
      window.addEventListener('click', e => {
        let target = e.target
        if (!target.closest('.sort__list') && !target.closest('.sort__btn')) {
          a.classList.remove('sort__menu-active');
          item.classList.remove('sort__btn-active');
        }
      })
    })
  })
}())

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__down-burger').addEventListener('click', function () {
    document.querySelector('.burger__menu').classList.add('burger__active-menu');

    window.addEventListener('click', item => {
      if (!item.target.closest('.burger__menu') && !item.target.closest('.header__down-burger')) {
        document.querySelector('.burger__menu').classList.remove('burger__active-menu');
      }
    })

    document.querySelector('.burger__menu-svg').addEventListener('click', function() {
      document.querySelector('.burger__menu').classList.remove('burger__active-menu');
    })
  })
}())

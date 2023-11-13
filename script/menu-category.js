document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__down-category--btn').addEventListener('click', function () {
    this.blur();
    document.querySelector('.header__down-category--btn').classList.toggle('category__menu-btn');
    document.querySelector('.header__down-category--list').classList.toggle('category__menu');
    document.querySelector('.header__down-category--svg').classList.toggle('category__menu-svg');
  })
  document.querySelector('.header__down-category--btn').addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      document.querySelector('.header__down-category--btn').classList.toggle('category__menu-btn');
      document.querySelector('.header__down-category--list').classList.toggle('category__menu');
      document.querySelector('.header__down-category--svg').classList.toggle('category__menu-svg');
    }
  });
}())

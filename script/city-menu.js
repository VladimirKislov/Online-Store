document.addEventListener('DOMContentLoaded', function () {
  function select() {
    const element = document.querySelector('.header__select');
    const choices = new Choices(element, {
      searchEnabled: false,
    });

    const btn = document.querySelector('.choices');
    const list = document.querySelector('.choices__list--dropdown');

    btn.addEventListener('click', event => {
      document.querySelector('.header__select-img').classList.toggle('header__select-img-active');
      event._isClick = true;
    })

    list.addEventListener('click', event => {
      event._isClick = true;
    })

    document.addEventListener('click', event => {
      event._isClick ? true : document.querySelector('.header__select-img').classList.remove('header__select-img-active');
    })
  }
  select();

}());


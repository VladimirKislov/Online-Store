import { modalAnimation, removeModalAnimation } from './green-sock.js';
document.addEventListener('DOMContentLoaded', function () {

  function modalOneClick() {
    const btnOneClick = document.querySelector('.product__price-buy');
    const modalOneClick = document.querySelector('.product__price-modal');
    const closeOneClick = document.querySelector('.product__price-modal-content-iconx');

    btnOneClick.addEventListener('click', () => {
      modalOneClick.classList.add('modal__buy');
      modalOneClick.classList.contains('modal__buy') ? modalAnimation('.product__price-modal') : false;
    })
    modalOneClick.addEventListener('click', function (item) {
      if (item.target === modalOneClick || item.target === closeOneClick) {
        removeModalAnimation('.product__price-modal');
        if (modalOneClick.getAttribute('style') === 'opacity: 0') {
          modalOneClick.removeAttribute('style');
          modalOneClick.classList.remove('modal__buy');
        }
      }
    })
  }
  modalOneClick();

  function modalImage() {
    const btn = document.querySelector('.product__images-container');
    const btnClose = document.querySelector('.product__wrapper-iconx');
    const modal = document.querySelector('.product__wrapper-modal');

    btn.addEventListener('click', () => {
      modal.classList.add('modal__image');
      modal.classList.contains('modal__image') ? modalAnimation('.product__wrapper-modal') : false;
    })
    modal.addEventListener('click', function (item) {
      if (item.target === modal || item.target === btnClose) {
        removeModalAnimation('.product__wrapper-modal');
        if (modal.getAttribute('style') === 'opacity: 0') {
          modal.removeAttribute('style');
          modal.classList.remove('modal__image');
        }
      }
    })
  }
  modalImage();

}())

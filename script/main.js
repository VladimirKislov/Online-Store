$(document).ready(function () {
  $('#form').submit(function () {
    if ($('.form__name').val() == '' || $('.form__tel').val() == '' || $('.form__email').val() == '') {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function () {
      if ($('.product__price-modal').hasClass('modal__buy')) {
        $('.product__price-modal').removeClass('modal__buy');
      }
      if ($('.form__overlay')) {
        $('.form__overlay').addClass('modal__active');
        gsap.to(".modal__active", { opacity: 1, scale: 1, duration: 1 });
      }
      $(this).find('input').val('');
      $('#form').trigger('reset');
    });
    return false;
  });
});


$('.form__overlay-modal-icon').click(function () {
  gsap.to(".modal__active", { opacity: 0, scale: 0, duration: 1 });
  $('.form__overlay').removeClass('modal__active');
});

$(document).mouseup(function (e) {
  var popup = $('.form__overlay-modal');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    gsap.to(".modal__active", { opacity: 0, scale: 0, duration: 1 });
    $('.form__overlay').removeClass('modal__active');
  }
});


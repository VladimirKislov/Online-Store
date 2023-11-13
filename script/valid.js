document.addEventListener('DOMContentLoaded', function () {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  $(document).ready(function () {
    // $('select').styler();
    $('form').each(function () {
      $(this).validate({
        // errorPlacement(error, element) {
        // 	return true;
        // },
        focusInvalid: false,
        rules: {
          tel: {
            required: true,
          },
          name: {
            required: true,
            minlength: 3,
          },
          email: {
            required: true,
          },
        },
        messages: {
          tel: {
            required: 'Недопустимый формат',
            function: (name, value) => {
              const phone = selector.inputmask.unmaskedvalue()
              return Number(phone) && phone.length === 10
            }
          },
          name: {
            required: 'Недопустимый формат',
            minlength: 'Нужно ввести минимум 3 буквы'
          },
          email: {
            required: 'Недопустимый формат',
          },
        },
      });
    });
  });
}())


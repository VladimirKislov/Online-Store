document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.rating__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      this.blur();
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.rating__btn').forEach(function (btn) {
        btn.classList.remove('rating__btn--active');
      })
      document.querySelectorAll('.list').forEach(function (tabContent) {
        tabContent.classList.remove('rating__btn--show');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('rating__btn--show');
      document.querySelector(`[data-path="${path}"]`).classList.add('rating__btn--active');
    })
  })
})

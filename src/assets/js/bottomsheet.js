$(function () {
  $(document).on('click', '.btnSheetToggle', function () {
    $(this).closest('.bottomsheet').toggleClass('is-shown')
  })
  $(document).on('click', '.course-navigation .btn-tab', function () {
    $('.bottomsheet').addClass('is-shown')
  })

  $(document).on('click', '.btn-state', function () {
    $(this).toggleClass('is-shown')
    $(this).closest('.medical-cont').find('.week-status').toggleClass('is-shown')
  })
})

export function arccodion() {
  const arccodion = $('.arccodion')
  const arccodionBtn = arccodion.find('.arccodion-btn')

  arccodionBtn.on('click', function () {
    const item = $(this).closest('.arccodion-item')
    const topHeight = $('.header').outerHeight() + $('.tab-nav').outerHeight() + 20
    const posTop = item.offset().top - topHeight

    if (item.hasClass('active')) {
      item.removeClass('active')
    } else {
      item.addClass('active')
      scrollTopMove(posTop)
    }
  })

  function scrollTopMove(pos) {
    $('html, body').animate({ scrollTop: pos }, { duration: 500 })
  }
}

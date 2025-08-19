import spinner from './_spinner.js'

$(function () {
  spinner() // 로딩 스피너

  // tab & tab contents
  const tabContainer = $('.tab-container')
  const tabItem = tabContainer.find('.tab-nav ul li')
  const tabContents = tabContainer.find('.tab-contents .tab-pane')

  if (tabContainer.length) {
    tabItem.on('click', function () {
      const _idx = $(this).index()

      // 기존 colored- 로 시작하는 클래스 제거
      const ulElem = $(this).closest('ul')
      ulElem.removeClass((index, className) => {
        return (className.match(/(^|\s)colored-\S+/g) || []).join(' ')
      })

      // 새로운 colored-{_idx} 클래스 추가
      ulElem.addClass(`colored-${_idx}`)

      tabItem.find('.btn').removeClass('active')
      $(this).find('.btn').addClass('active')
      tabContents.removeClass('active')
      tabContents.eq(_idx).addClass('active')

      const topHeight = $('.header').outerHeight() + $('.tab-nav').outerHeight()
      const posTop = tabContents.eq(_idx).offset().top - topHeight
      $('html, body').animate({ scrollTop: posTop }, { duration: 500 })
    })
  }
})

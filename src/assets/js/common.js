import { initSwipers } from './_swiper.js'
import { courseSwipers } from './_courseSwiper.js'
import { arccodion } from './_arccodion.js'
import spinner from './_spinner.js'

$(function () {
  initSwipers() // 교통 > 센터 개요 Swiper 실행
  arccodion()
  courseSwipers() // 산책로 > 산책 코스 추천
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

  // navTabs
  const navBar = $('section.navbar')
  const navBarItem = navBar.find('.nav-item')
  navBarItem.on('click', function () {
    console.log(this)
  })
  $.each(navBarItem, function (index, item) {
    console.log(index, item)
  })

  // BTN : 상단 이동
  const btnMoveTop = $('.bottom-page-utils .btn-top .btn')
  if (btnMoveTop.length) {
    btnMoveTop.on('click', scrollToTop)

    scrollVisibility()
    $(window).on('scroll', scrollVisibility)
  }

  // 상단 이동
  function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 200)
  }
  // 스크롤
  function scrollVisibility() {
    const _sTop = $(window).scrollTop()
    if (_sTop > 50) {
      btnMoveTop.fadeIn(200)
    } else {
      btnMoveTop.fadeOut(200)
    }
  }

  // BTN TAP ACTIVE
  $(document).on('click', '.tab-group .btn-tab', function () {
    $(this).siblings('.btn-tab').removeClass('active')
    $(this).addClass('active')
  })
})

$(document).ready(() => {
  // 페이지 로드 시 include 영역 처리
  function loadIncludes() {
    var allElements = document.getElementsByTagName('*')
    Array.prototype.forEach.call(allElements, function (el) {
      var includePath = el.dataset.includePath
      if (includePath) {
        var xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            el.outerHTML = this.responseText
          }
        }
        xhttp.open('GET', includePath, true)
        xhttp.send()
      }
    })
  }

  // 로더 실행
  const loader = function () {
    const html = `
        <div class="page-loader">
            <div class="dimmed"></div>
            <div class="load-msg">
              <i class="ico ico-loader-icon"></i>
              <p>해당 시설물에 대한 정보가 없습니다.</p>
              <p>잠시후 다시 시도해주세요.</p>
            </div>
        </div>
    `
    $('body').append(html)

    setTimeout(function () {
      $('.page-loader').fadeOut()
    }, 1000)
  }

  // 모달 제어 함수
  function modal() {
    $('.btn-modal').on('click', function (e) {
      e.preventDefault()

      const _target = $(this).data('modal-target')
      // console.log('target ' + _target)
      $(_target).addClass('show')
      $('body').css({ overflow: 'hidden' })

      // 검색 포커싱
      const keywordInput = $(_target).find('.ipt-text')
      if (keywordInput.length) {
        keywordInput.focus()
      }
    })
    $(document)
      .find('.modal .dimmed, .modal .btn-modal-close')
      .on('click', function () {
        modalClose($(this).closest('.modal'))
      })
  }

  function modalClose(obj) {
    const modal = $(obj)
    console.log(modal)

    modal.removeClass('show')
    $('body').css({ overflow: '' })
  }

  // 영역 노출/미노출 토글 함수
  const toggleContets = (showSelector, hideSelector) => {
    $(hideSelector).removeClass('is-shown').addClass('is-hidden')
    $(showSelector).removeClass('is-hidden').addClass('is-shown')
  }

  // 검색 키워드 버튼 클릭 시 동작
  $(document).on('click', '.btn-key', function () {
    console.log('키워드 클릭')
    modalClose('.modal-keyword')
    toggleContets('.bs-search-result', '.bs-main')
    $('.header-map').addClass('is-hidden')
    $('.header-search').removeClass('is-hidden')
  })

  // 검색 영역 닫기
  $(document).on('click', '.btn-back-search', function () {
    toggleContets('.bs-main', '.bs-search-result')
    $('.header-map').removeClass('is-hidden')
    $('.header-search').addClass('is-hidden')
  })

  // SOS, 알람, 네비게이션 버튼 액션
  function headerUtilClick() {
    $('.header-utils .btn').on('click', function () {
      const target = $(this).data('target')

      if (target !== undefined) {
        if (target === 'view-alarm') {
          alert('안심귀가 APP 실행')
        } else {
          window.location.href = `./${target}.html`
        }
      }
    })
  }

  // 페이지 타이틀 설정
  function pageTitle() {
    const param = $('body').data('page-title') || '스마트 안양'
    let mainHeader = param === '스마트 안양'

    if (!mainHeader) {
      $('#headerTitle').text(param)
    } else {
      $('#headerTitle').addClass('main-tit').html(`스마트 안양 <strong>도</strong>시를 <strong>담</strong>다`)
    }
  }

  // 네비게이션 페이지 이동
  function navbarClick() {
    $('.navbar .nav-item').on('click', function () {
      const target = $(this).data('target')
      const url =
        target === 'home' ? './index.html' : target === 'admin' ? `./index-${target}.html` : `./${target}.html`
      window.location.href = url
    })
  }

  // include 페이지 스크립트 실행
  async function includePageScript() {
    return new Promise((resolve) => {
      setTimeout(() => {
        headerUtilClick()
        pageTitle()
        navbarClick()
        modal()
        resolve()
      }, 300)
    })
  }

  // 실행 함수 호출
  // loader()
  loadIncludes()
  includePageScript()
})

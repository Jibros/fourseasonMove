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

  // include 페이지 스크립트 실행
  async function includePageScript() {
    return new Promise((resolve) => {
      setTimeout(() => {
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

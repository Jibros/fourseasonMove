// 페이지 로더
export default function spinner() {
  const html = `
    <div class="pageLoader">
        <div class="dimmed"></div>
        <div class="sk-cube-grid">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
        </div>
    </div>
  `
  $('body').append(html)

  // 2초 후 페이지 로더 사라짐
  setTimeout(function () {
    $('.pageLoader').fadeOut()
  }, 300)
}

// Swiper를 한 번에 초기화하는 함수
export const courseSwipers = () => {
  const envSwipers = new Swiper('.course-recommand-swiper', {
    freeMode: {
      enabled: true,
      sticky: true,
    },
    cssMode: true,
  })

  // 산책로 상세 스와이퍼
  const courseNavigationSwiper = new Swiper('.course-navigation', {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    cssMode: true,
  })
  const courseContentSwiper = new Swiper('.course-content', {
    spaceBetween: 0,
    autoHeight: true,
    thumbs: {
      swiper: courseNavigationSwiper,
    },
  })
}

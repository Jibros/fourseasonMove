const envSwipers = [
  { selector: '.admin-tab-safety1', pagination: '.admin-tab-safety1-pagination' }, // 환경 > 안전 스와이퍼 1
  { selector: '.admin-tab-safety2', pagination: '.admin-tab-safety2-pagination' }, // 환경 > 안전 스와이퍼 2
  { selector: '.admin-tab-welfare1', pagination: '.admin-tab-welfare1-pagination' }, // 환경 > 복지 스와이퍼 1
  { selector: '.admin-tab-traffic1', pagination: '.admin-tab-traffic1-pagination' }, // 환경 > 교통 스와이퍼 1
  { selector: '.admin-tab-traffic2', pagination: '.admin-tab-traffic2-pagination' }, // 환경 > 교통 스와이퍼 2
  { selector: '.admin-tab-traffic3', pagination: '.admin-tab-traffic3-pagination' }, // 환경 > 교통 스와이퍼 3
  { selector: '.admin-tab-city1', pagination: '.admin-tab-city1-pagination' }, // 환경 > 도시관리 스와이퍼 1
  { selector: '.admin-tab-city2', pagination: '.admin-tab-city2-pagination' }, // 환경 > 도시관리 스와이퍼 2
  { selector: '.admin-tab-commu1', pagination: '.admin-tab-commu1-pagination' }, // 환경 > 통신 스와이퍼 1
  { selector: '.admin-tab-its', pagination: '.admin-tab-its-pagination' }, // 행정 > 제공 서비스 > 첨단교통 ITS 솔루션 스와이퍼 1
  { selector: '.admin-tab-bus', pagination: '.admin-tab-bus-pagination' }, // 행정 > 제공 서비스 > 자율주행버스 스와이퍼 1
  { selector: '.admin-tab-its2', pagination: '.admin-tab-its2-pagination' }, // 행정 > 제공 서비스 > 교통정보 수집 스와이퍼 1
  { selector: '.admin-tab-ai', pagination: '.admin-tab-ai-pagination' }, // 행정 > 제공 서비스 > 인공지능 기반
  { selector: '.admin-tab-businfo', pagination: '.admin-tab-businfo-pagination' }, // 행정 > 제공 서비스 > 버스정보시스템
  { selector: '.admin-tab-signal', pagination: '.admin-tab-signal-pagination' }, // 행정 > 제공 서비스 > 첨단 신호
  { selector: '.admin-tab-cross', pagination: '.admin-tab-cross-pagination' }, // 행정 > 제공 서비스 > 교차로 감시
  { selector: '.admin-tab-system', pagination: '.admin-tab-system-pagination' }, // 행정 > 제공 서비스 > 시스템 통합 운영
  { selector: '.admin-tab-cctv', pagination: '.admin-tab-cctv-pagination' }, // 행정 > 제공 서비스 > CCTV 통합감시
  { selector: '.admin-tab-intelli', pagination: '.admin-tab-intelli-pagination' }, // 행정 > 제공 서비스 > 지능형 방범
  { selector: '.admin-tab-situation', pagination: '.admin-tab-situation-pagination' }, // 행정 > 제공 서비스 > 112,119 종합상황실
  { selector: '.admin-tab-smartcity', pagination: '.admin-tab-smartcity-pagination' }, // 행정 > 제공 서비스 > 스마트시티
  { selector: '.admin-tab-woman', pagination: '.admin-tab-woman-pagination' }, // 행정 > 제공 서비스 > 여성 안심존
  { selector: '.admin-tab-logo', pagination: '.admin-tab-logo-pagination' }, // 행정 > 제공 서비스 > 로고젝터
  { selector: '.admin-tab-car', pagination: '.admin-tab-car-pagination' }, // 행정 > 제공 서비스 > 차량경로 추적
  { selector: '.admin-tab-visit', pagination: '.admin-tab-visit-pagination' }, // 행정 > 제공 서비스 > 안전사고예방 방문교육
  { selector: '.admin-tab-arrears', pagination: '.admin-tab-arrears-pagination' }, // 행정 > 제공 서비스 > 체납차량
  { selector: '.admin-tab-selfnetwork', pagination: '.admin-tab-selfnetwork-pagination' }, // 행정 > 제공 서비스 > 초고속 자가통신망 구축
  { selector: '.admin-tab-bigdata', pagination: '.admin-tab-bigdata-pagination' }, // 행정 > 제공 서비스 > 초고속 AI 빅데이터
  { selector: '.admin-tab-related', pagination: '.admin-tab-related-pagination' }, // 행정 > 제공 서비스 > 유관기관 연계
  { selector: '.admin-tab-global', pagination: '.admin-tab-global-pagination' }, // 행정 > 제공 서비스 > 행정안전부 글로벌 전자정부
  { selector: '.admin-tab-schoolzone', pagination: '.admin-tab-schoolzone-pagination' }, // 행정 > 제공 서비스 > 스쿨존 어린이 교통사고
  { selector: '.admin-tab-missing', pagination: '.admin-tab-missing-pagination' }, // 행정 > 제공 서비스 > 실종아동 신원확인
  { selector: '.admin-tab-tracking', pagination: '.admin-tab-tracking-pagination' }, // 행정 > 제공 서비스 > 자동 추적
  { selector: '.admin-tab-analysis', pagination: '.admin-tab-analysis-pagination' }, // 행정 > 제공 서비스 > 지능형 영상분석
  { selector: '.admin-tab-carnumber', pagination: '.admin-tab-carnumber-pagination' }, // 행정 > 제공 서비스 > 차량번호판 자동추출
  { selector: '.view-banner-swiper', pagination: '.view-banner-swiper-pagination' }, // 스마트체험관 소개, 주야로 상세 내 슬라이드 실행
]

// Swiper를 한 번에 초기화하는 함수
export const initSwipers = () => {
  envSwipers.forEach(({ selector, pagination }) => {
    new Swiper(selector, {
      direction: 'horizontal',
      loop: true,
      pagination: { el: pagination },
    })
  })
}

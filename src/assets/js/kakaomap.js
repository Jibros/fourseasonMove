const mapContainer = document.getElementById('kakaomap'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.39428403593108, 126.95687180348044), //지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  }

const map = new kakao.maps.Map(mapContainer, mapOption) // 지도를 생성합니다

const imageSrc = '../assets/images/map/marker-default.svg',
  imageSize = new kakao.maps.Size(20, 26), // 마커이미지의 크기입니다
  imageOption = { offset: new kakao.maps.Point(10, 26) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
  markerPosition = new kakao.maps.LatLng(37.39428403593108, 126.95687180348044)

let marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage, // 마커이미지 설정
})
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map)

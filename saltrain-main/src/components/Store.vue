<!-- 
  검색기능
  마커 아이콘 변경

-->

<script>
    export default {
    name: "Store", // 컴포넌트 이름 지정
    data() {
      return {
        // map 객체 설정
        map: null,
        selectedMarker: null,
        mapOption: {
          center: {
            lat: 37.5043637,
            lng: 127.003621,
          },
          level: 6,
        },

        //lo: 경도 la: 위도
        markPoint: [
            {id: '1', name: '신세계 백화점 강남점', lo: '37.5043637', la:'127.003621', location: '서울 서초구 신반포로 176', tel: '1588-1234', info: false},
            {id: '2', name: '신세계 백화점 센텀시티점', lo: '35.1689218', la:'129.1296311', location: '부산 해운대구 센텀남대로 35', tel: '051-745-1234', info: false},
            {id: '3', name: '신세계 백화점 광주점', lo: '35.1605431', la:'126.8826817', location: '광주 서구 무진대로 932 신세계백화점광주점', tel: '1588-1234', info: false},
            {id: '4', name: '더현대 서울점 비클린', lo: '37.5260497', la:'126.928296', location: '서울특별시 영등포구 여의대로 108 지하2층', tel: '02-3277-0891', info: false},
            {id: '5', name: '현대 백화점 판교점 비클린', lo: '37.3927758', la:'127.1120283', location: '경기도 성남시 분당구 판교역로146번길 20 5층', tel: '0507-1456-1518', info: false},
            {id: '6', name: '롯데백화점 부산점 시시호시', lo: '35.1566418', la:'129.0560026', location: '부산 부산진구 가야대로 772 롯데백화점 부산본점 B1F', tel: '051-810-4090', info: false},
            {id: '7', name: '올리브영 명동타운점', lo: '37.563946', la:'126.9851624', location: '서울 중구 명동8길 14 (51-9,16) 1,2,5층지하1층', tel: '02-752-7973', info: false},
            {id: '8', name: '올리브영 관악타운점', lo: '37.4807059', la:'126.9522529', location: '서울 관악구 관악로 173', tel: '02-873-5495', info: false},
            {id: '9', name: '올리브영 서울역점', lo: '37.5551296', la:'126.9704576', location: '서울 중구 한강대로 405 지하1층 B01, B02호', tel: '02-362-8409', info: false},
            {id: '10', name: '아난티 코브 이터널 저니', lo: '35.1976859', la:'129.2283542', location: '부산광역시 기장군 기장읍 기장해안로 268-31', tel: '051-604-7000', info: false},
            {id: '11', name: '아난티 모비딕 마켓', lo: '35.1979229', la:'129.2286188', location: '부산광역시 기장군 기장읍 기장해안로 267-7', tel: '051-662-7000', info: false},
            {id: '12', name: '보마켓 서울숲점', lo: '37.5443796', la:'127.0438576', location: '서울 성동구 왕십리로 83-21', tel: '02-6233-7621', info: false},
            {id: '13', name: '보마켓 남산점', lo: '37.5440317', la:'127.0014414', location: '서울 용산구 소월로 377 남산맨션 1F', tel: '02-332-7621', info: false},
            {id: '14', name: '보마켓 경리단점', lo: '37.5420885', la:'126.9897407', location: '서울 용산구 녹사평대로 286', tel: '02-792-3380', info: false},
            {id: '15', name: '롭스플러스 제타플렉스점', lo: '37.5115444', la:'127.0963079', location: '서울특별시 송파구 올림픽로 240, 롯데마트', tel: '02-411-8026', info: false},
            {id: '16', name: '엠픽 포항점', lo: '36.0371495', la:'129.3632624', location: '포항시 북구 중앙상가길 22', tel: '054-241-8111', info: false},
            {id: '17', name: '엠픽 동성로 1호점', lo: '35.8687912', la:'128.5968167', location: '대구 중구 동성로6길 26', tel: '053-425-8111', info: false},
            {id: '18', name: '상상마당 홍대점', lo: '37.550912', la:'126.921127', location: '서울 마포구 어울마당로 65 상상마당빌딩', tel: '02-330-6200', info: false},
            {id: '19', name: '상상마당 부산점', lo: '35.1542841', la:'129.0573158', location: '부산 부산진구 서면로 39', tel: '051-809-5555', info: false},
            {id: '20', name: '원더플레이스 아이파크몰 용산점', lo: '37.5297133', la:'126.9647528', location: '서울 용산구 한강대로23길 55 아이파크몰 패션파크 2F', tel: '02-2012-4222', info: false},
            {id: '21', name: '해비치컨트리클럽', lo: '37.6133766', la:'127.2898937', location: '경기도 남양주시 화도읍 재재기로190번길 160', tel: '031-579-3000', info: false},
            {id: '22', name: '모나미스토어 수원점', lo: '37.2873572', la:'126.991639', location: '경기도 수원시 장안구 수성로 175 스타필드 수원 4층', tel: '031-690-1435', info: false},
            {id: '23', name: '피클샵', lo: '35.8125265', la:'128.5176161', location: '대구광역시 달서구 월배로 25', tel: '0507-1323-1778', info: false},
            {id: '24', name: '메이드바이', lo: '35.1546496', la:'129.0633409', location: '부산 부산진구 전포대로199번길 34', tel: '070-8676-4022', info: false}
        ],
      };
    },
    setup() {},
    created() {},
    mounted() {
          // api 스크립트 소스 불러오기 및 지도 출력
        if (window.kakao && window.kakao.maps) {
          this.loadMap();
        } else {
          this.loadScript();
        }
      },
      unmounted() {},
    methods: {
        // api 불러오기
      loadScript() {
        const script = document.createElement("script");
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=8695ac8e11b8b2b70ce9580f5419efab&autoload=false&libraies=services";
        script.onload = () => window.kakao.maps.load(this.loadMap);
  
        document.head.appendChild(script);
      },
      // 맵 출력하기
      loadMap() {
        const container = document.getElementById("map"); 
        const options = {
          //화면 열렸을 때 보여질 위치
          center: new window.kakao.maps.LatLng(this.mapOption.center.lat, this.mapOption.center.lng),
          level: 7
        };
        this.map = new window.kakao.maps.Map(container, options); 
        this.loadMaker();
      },
      // 지정한 위치에 마커 불러오기
      loadMaker() {
        //마커 이미지 커스텀
        // var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
        // imageSize = new kakao.maps.Size(52, 57), // 마커이미지의 크기입니다
        // imageOption = {offset: new kakao.maps.Point(24, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

        //마커 갯수만큼 반복
        for(var i=0; i < this.markPoint.length; i++){
          //마커 위치 입력
          const markerPosition = new window.kakao.maps.LatLng(
            this.markPoint[i].lo, this.markPoint[i].la
          );
          //마커 정보 입력
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            // image: markerImage // 마커이미지 설정 
          });
          marker.id = this.markPoint[i].id;

          //마커에 커스텀오버레이 띄우기
          var content = '<div class="customoverlay">' +
          '    <span class="title">' + this.markPoint[i].name + '</span>' +
          '</div>';

          var customOverlay = new kakao.maps.CustomOverlay({
            map: this.map,
            position: marker.getPosition(),
            content: content,
            yAnchor: 0.2,
          });

          //마커생성
          marker.setMap(this.map);
          
          // this.clickMarker(marker, this.markPoint);
        }
      },
      //매장이름 클릭했을때 지도 이동
      showPlace(x, y) {
        this.map.setCenter(new kakao.maps.LatLng(x, y));
        this.map.setLevel(5);
      },
      scroolTop(){
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    },
  };
</script>

<template>
    <!-- <h2>오프라인 매장 찾기</h2> -->
    <div id="store" class="map_wrap">
      <div id="map"></div>

      <div id="menu_wrap" class="bg_white">
        <!-- 검색기능 꼭 필요한지?? -->
          <!-- <div class="option">
              <div>
                  <form onsubmit="searchPlaces(); return false;">
                      키워드 : <input type="text" value="신세계 백화점 강남점" id="keyword" size="15"> 
                      <button type="submit">검색하기</button> 
                  </form>
              </div>
          </div>
          <hr> -->
          <ul id="places_list">
            <li
            class="store_items"
            v-for="(store, index) in this.markPoint"
            :key="index"
            @click="showPlace(store.lo, store.la), scroolTop()"
            >
            <p class="store_name">{{ store.name }}</p>
            <p class="store_location">{{ store.location }}</p>
            <p class="store_tel">{{ store.tel }}</p>
            </li>
          </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
    .map_wrap, .map_wrap * {
      max-width: 1400px;
      margin:0 auto;
      padding:0;
      font-size:14px;
      /* overflow:overlay; */
    }
    .map_wrap a, .map_wrap a:hover, .map_wrap a:active{
      color:#000;
      text-decoration: none;
    }
    .map_wrap {
      position:relative;
      width:100%;
    }
    /* pc */
    @media (min-width: 800px){
      #map {
        width: 100%;
        height: 800px;
        position:relative;
        overflow:hidden;
        user-select:none
      }
      #menu_wrap {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        width:350px;
        margin:10px 0 30px 10px;
        padding:5px;
        overflow-y:auto;
        z-index: 1;
        border-radius: 10px;
      }
    }
    /* 모바일 */
    @media (max-width: 799px){
      #map {
        width: 100%;
        height: 450px;
        position:relative;
        overflow:hidden;
        user-select:none
      }
      #menu_wrap {
        top:0;
        left:0;
        bottom:0;
        width:100%;
        padding:5px;
        overflow-y:auto;
        z-index: 1;
        border-radius: 10px;
      }
    }
    .bg_white {
      background:#fff;
    }

    #places_list li {
      list-style: none;
      text-align: left;
    }
    .store_name{
      font-size: 16px;
    }
    #places_list .store_items {
      position:relative;
      border-bottom:1px solid #888;
      overflow: hidden;
      cursor: pointer;
      min-height: 65px;
      padding: 15px;
    }
    #places_list .store_name{
      margin-bottom: 4px;
      font-weight: bold;
    }

    .customoverlay {
      position:relative;
      bottom:85px;
      border-radius:6px;
      border: 1px solid #ccc;
      border-bottom:2px solid #ddd;
      float:left;
    }
    .customoverlay:nth-of-type(n) {
      border:0;
      box-shadow:0px 1px 2px #888;
    }
    .customoverlay .title {
      display:block;
      text-align:center;
      background:#fff;
      padding:10px 15px;
      font-size:16px;
      font-weight:bold;
    }
    .customoverlay:after {
      content:'';
      position:absolute;
      margin-left:-12px;
      left:50%;
      bottom:-12px;
      width:22px;
      height:12px;
      background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')
      }
</style>
    

    
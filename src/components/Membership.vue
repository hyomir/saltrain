<template>
    <div class="membership-benefits">
      <h1>MEMBERSHIP BENEFIT</h1>
      <h2>솔트레인 멤버쉽 등급별 할인 혜택</h2>
      <table>
        <thead>
          <tr>
            <th>
                <p>회원 등급</p>
            </th>
            <th>
                <img src="../assets/membership_icon/s.png" alt="sliver_icon" class="membership_icon">
                <p>SILVER</p>
            </th>
            <th>
                <img src="../assets/membership_icon/g.png" alt="gold_icon" class="membership_icon">
                <p>GOLD</p>
            </th>
            <th>
                <img src="../assets/membership_icon/p.png" alt="platinum_icon" class="membership_icon">
                <p>PLATINUM</p>
            </th>
            <th>
                <img src="../assets/membership_icon/v.png" alt="vip_icon" class="membership_icon">
                <p>VIP</p>
            </th>
            <th>
                <img src="../assets/membership_icon/vv.png" alt="vvip_icon" class="membership_icon">
                <p>VVIP</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>등급기준</th>
            <td>가입시 적용</td>
            <td>5만원 이상</td>
            <td>10만원 이상</td>
            <td>30만원 이상</td>
            <td>100만원 이상</td>
          </tr>
          <tr>
            <th>구매 적립</th>
            <td>1%</td>
            <td>3%</td>
            <td>3%</td>
            <td>5%</td>
            <td>7%</td>
          </tr>
          <tr>
            <th>등급별 할인</th>
            <td>3%</td>
            <td>3%</td>
            <td>5%</td>
            <td>7%</td>
            <td>10%</td>
          </tr>
          <tr>
            <th>카카오톡 친구 할인</th>
            <td>10%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>첫구매 감사 쿠폰 지급</th>
            <td>10%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>회원가입 쿠폰</th>
            <td>5,000원</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>추가혜택</th>
            <td colspan="5" class="more">
                <p>텍스트 리뷰 작성 500원 적립 / 포토 리뷰 작성 1,000원 적립</p>
                <p>생일 축하 쿠폰 10,000원 지급</p>
                <p>(회원 정보에 생일 정보 기입하신 고객님의 생일날로부터 한 달 경과 후 쿠폰 사용 불가)</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="additional-info">
        <small>
          - 등급 산정 기준: 직전 6개월 누적 실 결제금액 기준, 매월 1일 업데이트<br>
          - 네이버 페이로 결제 시 네이버 회원은 주문 및 적립 혜택에 적용되어, 솔트레인 공식 온라인몰 회원 혜택이 적용되지 않습니다.
        </small>
      </div>
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>

  .more{
    text-align: left;
    line-height: 1.6;
  }
  .more p:first-child{
    font-size: 20px;
    font-weight: bold;
  }
  .more p:nth-child(2){
    font-size: 18px;
  }
  .more p:last-child{
    font-size: 14px;
  }

  .membership_icon{
    margin: 0 auto;
  }

  .membership-benefits {
    text-align: center;
    margin: 20px;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  th {
    font-weight: bold;
  }
  
  .additional-info {
    margin-top: 20px;
    font-size: 0.9em;
    text-align: left;
  }
  
  small {
    color: #888;
  }
  </style>
  
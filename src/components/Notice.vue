<template>
  <div id="notice_wrap">
    <div class="notice-list">
      <ul>
        <li v-for="(item, index) in notices" :key="index" @click="openDialog(item)">
          <span class="notice-number">{{ item.number }}</span>
          <span class="notice-title">{{ item.title }}</span>
          <span class="notice-date">{{ item.date }}</span>
        </li>
      </ul>

      <!-- Dialog for showing details -->
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title class="headline">{{ selectedNotice.title }}</v-card-title>
          <v-card-text>
            <p>{{ selectedNotice.details }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">닫기</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notices: [
        { number: 1, title: '배송안내', date: '2022-10-19', details: '평일 15시 이전 결제 완료 건에 한해 당일 출고됩니다. (공휴일이나 주말은 배송기간에 포함되지 않습니다.), 평균 배송일은 1~3일이며, 품절로 인한 상품 취소는 연락을 드립니다. 제주도 및 도서 산간 지역은 추가 운임이 부과될 수 있습니다.' },
        { number: 2, title: '반품 및 교환 안내', date: '2022-09-07', details: '단순 변심 반품 및 교환은 상품 수령 후 7일 이내에 요청 가능합니다. 상품을 사용하셨거나 상품이 훼손된 경우 반품/교환이 어려울 수 있습니다. 이미 출고된 제품에 대한 주문 취소일 경우, 고객님께서 왕복 배송비를 부담하셔야 합니다.' },
        { number: 3, title: '솔트레인 공식스토어 멤버십 혜택', date: '2023-03-10', details: '신규 회원에게 드리는 스페셜 웰컴 혜택! 월컴 10%할인쿠폰 신규 3000원 적립, 첫 구매감사 5% 할인쿠폰 등 다양한 혜택이 있습니다.' },
        { number: 4, title: '솔트레인 추석 연휴 안내', date: '2023-04-04', details: '일반택배는 9/25일까지 출고 가능, 제주지역은 9/24일까지 주문건 출고 가능합니다.' },
        { number: 5, title: '솔트레인 소비자가격 인상 공지', date: '2023-03-20', details: '안녕하세요 솔트레인입니다. 항상 저희 솔트레인을 사랑해주시는 모든 분들께 진심으로 감사드립니다. 매년 지속되는 원재료 값의 가격상승, 물가 상승, 운임비 대폭 상승 등으로 부득이하게 2024년 8월 11일 부터 소비자 가격을 인상하게 되었습니다. 가격 인상에 대한 고객 여러분들의 너른 양해 부탁드리며, 항상 최고의 품질과 고객만족을 위해 최선의 노력을 다하겠습니다.' },
        { number: 6, title: '솔트레인 택배사 변경 안내', date: '2023-02-07', details: '보다 빠르고 안전한 배송을 위해 1월 15일 부로 택배사가 변경됩니다. 이용에 참고 부탁드리며, 더 나은 서비스로 보답하겠습니다. 감사합니다.' },
      ],
      dialog: false,
      selectedNotice: {},
    };
  },
  methods: {
    openDialog(notice) {
      this.selectedNotice = notice;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
#notice_wrap{
  max-width: 1280px;
  margin: 50px auto 0;
}

.notice-list ul {
  list-style: none;
  padding: 0;
}

.notice-list li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.notice-list li:hover {
  background-color: #f5f5f5;
}

.notice-number {
  width: 5%;
}

.notice-title {
  width: 75%;
}

.notice-date {
  width: 20%;
  text-align: right;
  color: #666;
}
</style>

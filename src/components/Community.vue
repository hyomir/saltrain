<template>
  <div id="QnA">
    <div class="faq_qna">
      <p class="faq menu_check">
        <a href="/community">자주 묻는 질문</a>
      </p>
      <p class="qna menu_uncheck">
        <a href="/qna">1:1 문의</a>
      </p>
    </div>
    <div class="faq_box">
      <v-expansion-panels
        v-model="panel"
        multiple
      >
        <v-expansion-panel
          text="본 제품은 매일 꾸준한 사용으로 충치예방 치태제거 등의 효과로 구강질환 등을 예방하는 제품입니다. 다만 치료 목적이 아니므로, 구강질환 치료는 전문가나 의사와 상의 바랍니다."
          title="구강 질환에 도움이 되나요?"
          value="구강 질환에 도움이 되나요?"
        ></v-expansion-panel>

        <v-expansion-panel
          text="네, 솔트레인은 제품별 인체적용시험을 통해 구취제거 효과를 확인하였습니다."
          title="구취제거 효과가 있나요?"
          value="구취제거 효과가 있나요?"
        ></v-expansion-panel>
        <v-expansion-panel
          text="자연유래 허브성분과 자연 그대로의 소금을 다량 함유하고 있어 깊은 허브향과 상쾌함이 특징입니다."
          title="솔트레인 치약은 무슨 맛인가요?"
          value="솔트레인 치약은 무슨 맛인가요?"
        >
        </v-expansion-panel>
        <v-expansion-panel
          text="시린이 증상완화의 기능성 치약으로는 “솔트레인 센서티브 치약”을 권장합니다."
          title="시린이 치료에 도움이 되나요?"
          value="시린이 치료에 도움이 되나요?"
        >
        </v-expansion-panel>
        <v-expansion-panel
          text="이를 희게 유지하고 튼튼하게 하는 효능효과가 있습니다. 이로 인해 누런 이를 예방할 수 있지만, 미백 기능성 제품은 아닙니다."
          title="미백기능이 있나요?"
          value="미백기능이 있나요?"
        >
        </v-expansion-panel>
        <v-expansion-panel
          text="본 제품은 까다로운 원료 선별 및 배합으로 만들어져 구강 내 환경 개선에 도움을 줍니다. 다만, 치료 목적이 아니므로 구강건조증 치료는 전문가나 의사와 상의 바랍니다."
          title="구강건조증에 도움이 되나요?"
          value="구강건조증에 도움이 되나요?"
        >
        </v-expansion-panel>
        <v-expansion-panel
          text="덴티스테는 무불소 치약과 불소 치약이 있습니다. 충치가 잘 생기거나, 불소 함유 제품을 찾으시는 분은 “솔트레인 센서티브 치약”(불소 1000ppm함유)을 권장합니다. 무불소 치약 또한 충치 예방 및 구취제거에 효과적인 제품으로 인체적용시험을 완료하였습니다."
          title="제품 중 불소 치약이 있나요?"
          value="제품 중 불소 치약이 있나요?"
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<style scoped>

  .faq_box{
    width: 80%;
    margin: 0 auto;
  }

  .faq_qna{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 40px;
  }
  .faq_qna p{
    padding: 12px 32px;
    border: 2px solid #b0b0b0;
    border-radius: 24px;
    font-weight: bold;
  }
  .menu_check a{
    color: #1a51e6;
    font-size: 20px;
  }
  .menu_uncheck a{
    color: #b0b0b0;
    font-size: 20px;
  }

</style>

<script>

  export default {
    data () {
      return {
        panel: [],
      }
    },
    methods: {

    },
  }
</script>
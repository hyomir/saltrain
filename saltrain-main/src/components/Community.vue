<template>
  <div id="QnA">
    <h2>QnA</h2>
    <div class="faq_qna">
      <p class="faq">자주 묻는 질문</p>
      <p class="qna">1:1 문의</p>
    </div>
    <div class="faq_box">
      <v-expansion-panels
        v-model="panel"
        multiple
      >
        <v-expansion-panel
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Foo"
          value="foo"
        ></v-expansion-panel>

        <v-expansion-panel
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Bar"
          value="bar"
        ></v-expansion-panel>

        <v-expansion-panel
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Car"
          value="car"
        
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<style>

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
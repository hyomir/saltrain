<template>
  <div id="Notice">
    <h2>Notice</h2>
    <v-row>
      <v-col cols="12">
        <v-card class="mb-4">
          <v-card-title>
            <span class="headline">공지사항</span>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-list>
          <v-list-item-group v-for="(notice, index) in notices" :key="index" class="mb-2">
            <v-list-item class="border-bottom">
              <v-list-item-content>
                <v-list-item-title class="headline">{{ notice.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ notice.date }}</v-list-item-subtitle>
                <v-list-item-subtitle class="mt-2">{{ notice.content }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
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
  .headline {
    font-weight: bold;
  }
  .border-bottom {
  border-bottom: 1px solid #ddd;
  padding-bottom: 16px;
}

</style>

<script>
export default {
  data() {
    return {
      notices: [
        { title: '공지사항 1', date: '2024-08-01', content: '공지사항 내용 1입니다.' },
        { title: '공지사항 2', date: '2024-08-05', content: '공지사항 내용 2입니다.' },
        { title: '공지사항 3', date: '2024-08-10', content: '공지사항 내용 3입니다.' },
      ],
    };
  },
};
</script>
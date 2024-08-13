<template>
  <v-app>
    <div class="qna_wrap">
      <div class="faq_qna">
        <p class="faq menu_uncheck">
          <a href="/community">자주 묻는 질문</a>
        </p>
        <p class="qna menu_check">
          <a href="/qna">1:1 문의</a>
        </p>
      </div>
      <div class="contact-container">
        <!-- Contact Information Section -->
        <div class="contact-info">
          <h2>궁금한 사항이나 질문이 있으시다면,<br> 문의를 남겨주세요.</h2>

          <div class="info-details">
            <div class="info-item">
              <p><v-icon
                class="qna_icon"
                >mdi-map-marker</v-icon></p>
              <span class="info-title">사업장 주소</span>
              <p>서울 강남구 논현로149길 31 401호 (주) 비온뒤컴퍼니</p>
            </div>
            <div class="info-item">
              <p><v-icon
                class="qna_icon"
                >mdi-phone</v-icon></p>
              <span class="info-title">고객센터</span>
              <p>02-1234-5678</p>
            </div>
            <div class="info-item">
              <p><v-icon
                class="qna_icon"
                >mdi-clock-outline</v-icon></p>
              <span class="info-title">운영시간</span>
              <p>평일 10:00 - 17:00<br />점심 12:00 - 13:00<br />토·일·공휴일 휴무</p>
            </div>
            <div class="info-item">
              <p><v-icon
                class="qna_icon"
                >mdi-email-fast-outline</v-icon></p>
              <span class="info-title">이메일</span>
              <p>saltrain@gmail.com</p>
            </div>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div class="contact-form">
          <form>
            <div class="form-group">
              <label for="type">문의종류</label>
              <select id="type">
                <option value="배송" selected>배송관련</option>
                <option value="상품">상품관련</option>
              </select>
            </div>
            <div class="form-group">
              <label for="name">성함 (Name)</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
              <label for="phone">연락처 (Phone Number)</label>
              <input type="text" id="phone" v-model="form.phone" required />
            </div>
            <div class="form-group">
              <label for="email">이메일 (E-mail)</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
              <label for="questions">문의내용 (Questions)</label>
              <textarea id="questions" v-model="form.questions" required></textarea>
            </div>
            <div class="form-group">
              <label for="attachment">파일첨부 (Attachments)</label>
              <input type="file" id="attachment" />
            </div>
            <button type="submit" class="submit-btn">접수하기</button>
          </form>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: '',
        name: '',
        phone: '',
        email: '',
        questions: '',
        attachment: null,
        agree: false,
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log(this.form);
    },
    handleFileUpload(event) {
      this.form.attachment = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.qna_wrap{
  max-width: 1280px;
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


  .qna_icon{
    font-size: 60px;
    margin-bottom: 16px;
  }

.info-details{
  display: grid;
  grid-template-columns: 50% 50%;
}
  
.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.contact-info,
.contact-form {
  width: 100%;
  max-width: 48%;
  margin-bottom: 20px;
}
.contact-info h2{
  font-size: 28px;
}

@media (max-width: 768px) {
  .contact-info,
  .contact-form {
    max-width: 100%;
  }
}

.info-details {
  margin-top: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 0 10px;
}
.info-item p{
  font-size: 16px;
}

.info-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  height: 100px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #1a51e6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

</style>

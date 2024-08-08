<template>
    <div id="login">
        <div class="login_cont">
            <p class="dc_txt">SALTRAIN</p>
            <div id="naver_id_login"></div>
            <form action="" name="Login">
                <fieldset>
                    <legend>login</legend>
                    <p>
                        <label for="id">아이디</label>
                        <input type="text" placeholder="아이디" class="id"></p>
                    <p>
                        <label for="id">비밀번호</label>
                        <input type="password" placeholder="패스워드" class="password"></p>
                    <button type="submit">로그인</button>
            </fieldset>
            </form>

            <div class="service_wrap">
                <p class="search_id"><a href="https://saltrain.kr/member/id/find_id.html">아이디찾기</a></p>
                <p class="search_pwd"><a href="https://saltrain.kr/member/passwd/find_passwd_info.html">비밀번호찾기</a></p>
                <p class="join_us"><a href="https://saltrain.kr/member/agreement.html">회원가입</a></p>
            </div>

            <a href="#none">
                <div class="login_ver">
                    <img src="@/assets/naver_logo.png">
                    <p>네이버로 로그인</p>
                </div>
            </a>

            <div id="naver_id_login"></div>

            <a href="#none">
                <div class="login_ver">
                    <img src="@/assets/google_logo.png">
                    <p>구글로 로그인</p>
                </div>
            </a>

            <a href="#none">
                <div class="login_ver">
                    <img src="@/assets/kakao_logo.png">
                    <p>카카오로 로그인</p>
                </div>
            </a>
    </div>
    
    </div>
</template>

<script>
const clientId = "AOZ3oDU74MI5PFFryvoN";

export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.naverLogin = new window.naver_id_login(
      clientId,
      "http://localhost:5173"  // 개발자센터에서 등록한 Callback URL
    );
    var state = this.naverLogin.getUniqState();
    this.naverLogin.setButton("white", 2, 40); // 버튼설정
    this.naverLogin.setDomain("http://localhost:5173/login");
    this.naverLogin.setState(state);
    this.naverLogin.setPopup(); // 팝업 여부
    this.naverLogin.init_naver_id_login();
  },
};

</script>


<style>
    #login{
        background: #fff;
    }
    #login a{
        color: #666666;
    }

    #login a:hover{
        color: #666666;
        font-weight: bold;
    }

    .dc_txt{font-size:  var(--h1-font-size); 
        font-family: "urbane-condensed", sans-serif; 
        font-weight: 700; font-style: normal;
        margin-bottom: 2.5rem;
       }

    .login_cont{
        width: 427px;
        margin: 0 auto;
        text-align: center;
        padding: 5rem 0;
    }

    #login legend,
    #login label{
        display: none;
    }

    span>img{
        width: 20px;
    }

    .id{
        width: 427px;
        height: 40px;
        margin-bottom: 20px;
        border: 1px solid #484848;
        padding-left: 6px;
    }

    .password{
        width: 427px;
        height: 40px;
        margin-bottom: 5rem;
        border: 1px solid #484848;
        padding-left: 6px;
    }

    .login_cont button{
        width: 427px;
        height: 60px;
        background: #000000;
        color: #fff;
        font-size: 1.25rem;
        margin-bottom: 20px;
    }

    .service_wrap{
        display: flex;
        margin-bottom: 20px;
    }

    .service_wrap a{
        display: block;
        font-size: 1rem;
    }

    .search_id{
        width: 134px;
        border-right: 1px solid #484848;
    }

    .search_pwd{
        width: 158px;
        border-right: 1px solid #484848;
    }

    .join_us{
        width: 135px;
    }

    .login_ver{
        width: 427px;
        height: 70px;
        border-bottom: 1px solid #484848;
        position: relative;
    }

    .login_ver img{
        width: 20px;
        position: absolute;
        left: 128px;
        top: 25px;
    }

    .login_ver p{
        position: absolute;
        left: 172px;
        top: 22px;
    } 
</style>


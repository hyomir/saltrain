<template>
<div id="header">
    <v-app>
    <v-app-bar color="#000" height="80px">  
        <nav>
            <div class="gnb">
                <h1><img src="@/assets/logo_white.svg" alt="saltrain"></h1>
                <ul>
                    <li><a href="">PRODUCTS</a></li>
                    <li><a href="">STORE</a></li>
                    <li><a href="">COLLECTION</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">COMMUNITY</a></li>
                </ul>

                <div class="util_menu">
                    <v-btn>
                        <v-icon><img src="@/assets/language.svg" alt=""></v-icon>
                    </v-btn>

                    <v-btn>
                        <v-icon><img src="@/assets/search.svg" alt=""></v-icon>
                    </v-btn>

                    <v-btn>
                        <v-icon><img src="@/assets/person.svg" alt=""></v-icon>
                    </v-btn>

                    <v-btn>
                        <v-icon><img src="@/assets/shopping_bag.svg" alt=""></v-icon>
                    </v-btn>
                </div>
                  
            </div>
        </nav>
    </v-app-bar>
</v-app>
</div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
}
</script>

<style>
/* reset */
a{
    color: #fff;
    font-size:1.25rem; /*20px*/
}

a:hover{
    color: #fff;
   /* font-weight: bold; */
}

#header{
    width: 100%;
    background: #000;
}

h1 img {
    width: 190px;
    margin-right: 126px;
}


nav{
    width: 1280px;
    margin: 0 auto;
}

.gnb{
   
    display: flex;
    margin-right: 164px;
}

.gnb ul{
    display: flex;
    align-items: center;
}

.gnb ul li{
    margin-right: 28px;
}


.util_menu{
    display: flex;
    align-items: center;
}
/* 모바일 버전에서 menu 아이콘 보이도록 설정 */
@media (max-width: 768px) {
    .menu {
        display: inline-block; /* 모바일 화면에서는 보이게 설정 */
    }

    v-app-bar {
        width: 100%; /* 모바일 화면에서는 전체 너비를 차지하도록 설정 */
        margin: 0; /* 모바일 화면에서는 중앙 정렬 제거 */
    }
}

</style>
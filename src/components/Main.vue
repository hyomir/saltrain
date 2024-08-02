<template>
    <v-app id="main">
            <v-container class="main_slider" fluid>
                <h2 class="screen_out">솔트레인</h2>
                <div class="bg_video">
                    <video class="bg_video_content" autoplay muted loop>
                        <source src="@/assets/main_img/waves.mp4" type="video/mp4"/>
                        Your browser is not supported!
                    </video>
                </div>
                <div class="box_logo">
                    <img src="@/assets/main_img/logo_square.svg" alt="">
                </div>
            </v-container>
            <v-container class="brand text-center">
                <v-row>
                    <v-col cols="12">
                        <h2 class="screen_out">브랜드 소개</h2>
                        <div class="brand_txt">
                            <h3>Life essentials make you GOOD.</h3>
                            <span class="dc_txt">Salt + Rain</span>
                            <h2>
                                최상의 소금을 얻을 수 있는 조합.<br>
                                솔트레인은 국내산 프리미엄 소금, <br>
                                ‘그레이 솔트' 기반의 라이프스타일 브랜드입니다.
                            </h2>
                            <p>
                                비가 내려 깨끗하게 씻겨진 염전에서는 더 균일하고 좋은 품질의 소금 결정이 피어납니다.<br>
                                비 내린 갯벌의 토판 위에서 생기는 첫 소금 결정에는미네랄이 풍부하게 함유되어 있습니다.<br>
                                SALTRAIN의 브랜드 네임은 좋은 품질의 토판염만을 사용해 제품을 만드는 우리의 약속입니다.
                            </p>
                        </div>
                    </v-col>
                </v-row>
                    <v-row>
                        <v-col md="8" offset-md="2">
                            <img src="@/assets/main_img/brand.png"/>
                        </v-col>
                    </v-row>
            </v-container>
            <div class="linear_bg">
                <v-container class="goods">
                    <div class="goods_txt text-center align-self-center">
                        <h2>소금으로부터 개발된 생활 필수품</h2>
                        <p>
                            소금은 지상에서 먹을 수 있는 유일한 암석이며
                            사람에게 가장 필요한 무기질 중 하나입니다.
                            <br>
                            소금에는 자연적으로 살균, 소독 효과가 있어
                            오랜 역사 속에서 많은 나라들이 소금 양치를 해왔습니다.
                            <br>
                            그런 소금이 함유된 치약은 잇몸 염증 완화에 도움을 주며
                            효과적인 천연 살균, 소독제로 사용할 수 있습니다.
                        </p>
                    </div>
                    <div class="goods_list">
                        <div class="left_img">
                            <div class="img_card"><img src="@/assets/main_img/goods_01.png" alt=""></div>
                            <div class="img_card"><img src="@/assets/main_img/goods_02.png" alt=""></div>
                            <div class="img_card"><img src="@/assets/main_img/goods_03.png" alt=""></div>
                        </div>
                        <div class="right_img">
                            <div class="img_card"><img src="@/assets/main_img/goods_04.png" alt=""></div>
                            <div class="img_card"><img src="@/assets/main_img/goods_05.png" alt=""></div>
                            <div class="img_card"><img src="@/assets/main_img/goods_06.png" alt=""></div>
                        </div>
                    </div>
                </v-container>
                <v-container class="collaboration">
                            <h2 class="screen_out">협업</h2>
                            <div class="collabo_txt text-center">
                                <span class="dc_txt">KEEP IT CLOSE</span>
                                <p>먹을 수 있는 소금을 바탕으로 한 라이프스타일 제품을<br>
                                    보다 ‘더 가까이에서' 즐길 수 있도록<br>
                                    돕는 것은 변함없는 솔트레인의 목표입니다.
                                </p>
                            </div>
                            <div class="collabo_list" fluid>
                                <ul class="collabo_slider d-flex">
                                    <li class="mr-16"><a href="#none"><img src="@/assets/main_img/collabo_01.png" alt=""></a></li>
                                    <li class="mr-16"><a href="#none"><img src="@/assets/main_img/collabo_02.png" alt=""></a></li>
                                    <li class="mr-16"><a href="#none"><img src="@/assets/main_img/collabo_03.png" alt=""></a></li>
                                </ul>
                            </div>
                </v-container>
                <v-container class="products">
                                <div class="products_txt">
                                    <h2>Saltrain Products</h2>
                                    <a href="#none">more <span>+</span></a>
                                </div>
                            <div class="products_list" fluid>
                                <ul class="products_slider d-flex">
                                    <li><a href="#none"><img src="@/assets/main_img/products_01.png" alt=""></a></li>
                                    <li><a href="#none"><img src="@/assets/main_img/products_02.png" alt=""></a></li>
                                    <li><a href="#none"><img src="@/assets/main_img/products_03.png" alt=""></a></li>
                                    <li><a href="#none"><img src="@/assets/main_img/products_04.png" alt=""></a></li>
                                    <li><a href="#none"><img src="@/assets/main_img/products_05.png" alt=""></a></li>
                                    <li><a href="#none"><img src="@/assets/main_img/products_06.png" alt=""></a></li>
                                </ul>
                            </div>
                    <div class="deco_big_logo"><img src="@/assets/main_img/logo_lx_white.svg" alt=""></div>
                </v-container>
            </div>
    </v-app>
</template>
<style scoped>
.main_slider {
    padding: 0;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    background: var(--k900-color);
    margin-bottom: var(--large-bottom);
    position: relative;
}

.bg_video {
    height: 100vh;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
}

.bg_video_content {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.box_logo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    mix-blend-mode: difference;
}
.box_logo img{
    width:100%;
}
.brand{
    margin-bottom: var(--large-bottom);
}
.brand img{
    width:100%;
}
.brand_txt {
    margin-bottom: var(--small-bottom);
}

.brand_txt h3 {
    display: block;
    font-size: var(--h4-font-size);
    font-family: "urbane-condensed", sans-serif;
    font-weight: 700;
    font-style: normal;
    line-height: 0;
    margin-bottom: var(--small-bottom);
}

.brand_txt span {
    color: var(--white-color);
    padding: 0 40px;
    box-sizing: border-box;
    background: var(--b900-color);
}

.brand_txt h2 {
    padding-top: var(--s-bottom);
    line-height: 3rem;
    margin-bottom: var(--small-bottom);
}

.linear_bg {
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(52, 52, 52, 1) 63%, rgba(26, 81, 230, 1) 100%);
    color: var(--white-color);
    border-radius: 2em 2em 0 0;
}

/* 3.goods */
.goods {
    padding: var(--large-bottom) 0;
    box-sizing: border-box;
    position: relative;
}

.goods h2 {
    margin-bottom: var(--small-bottom);
}

.goods_txt {
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.goods_list {
    height: 100vh;
    position: relative;
    z-index: 3;
}

.left_img {
    position: absolute;
    left: 0;
}

.right_img {
    position: absolute;
    right: 0;
}

.goods_list img{
    width: 100%;
}
.collaboration{
    padding: var(--medium-bottom) 0;
    box-sizing: border-box;
}

.collabo_txt span {
    width: 428px;
    padding: 0 40px;
    box-sizing: border-box;
    background: var(--b900-color);
}

.collabo_txt p {
    font-size: var(--h4-font-size);
    line-height: 1.875rem;
    padding-top: 3rem;
    box-sizing: border-box;
    margin-bottom: var(--large-bottom);
}

.collabo_slider li a {
    display: block;
}

/* 5.products */
.products {
    padding: var(--medium-bottom) 0;
}

.products_txt {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--medium-bottom);
}

.products_txt a {
    display: block;
    width: 120px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid var(--white-color);
    font-family: "urbane-condensed", sans-serif;
    font-weight: 700;
    font-size: var(--h4-font-size);
    color: var(--white-color);
}

.products_txt a span {
    padding-left: 2rem;
}

.deco_big_logo {
    padding-bottom: var(--xl-bottom);
}
.deco_big_log img{
    width: 100%;
}
</style>
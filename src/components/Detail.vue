<template>
    <v-app id="detail">
        <v-container class="px-0">
            <v-row class="sub_root">
                <p>홈 > products > <span>All</span></p>
            </v-row>
            <v-row>
                <v-col cols="6" class="pl-0">
                    <div class="products_img">
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <div class="detail_title">
                        <h2>그레이 솔트 치약 100g</h2>
                        <p class="taste">개운함 I 프로폴리스 I 데일리 구강케어</p>
                        <p class="explain">마일드한 쿨링감과 프로폴리스가 함유되어 깔끔한 세정감이 기분좋은 솔트레인 시그니처 투스페이스트</p>
                        </div>
                        <div class="price d-flex">
                                <p><span class="r_price">정상가</span></p>
                                <div class="d-flex">
                                    <p><span class="discount">할인율</span></p>
                                    <p><span class="c_price">판매가</span></p>
                                </div>
                            </div>
                        <div>
                            <ul class="colors d-flex">
                                <li><a href="#none"><img src="@/assets/products_img/tooth_blue_thumb.png" alt=""></a></li>
                                <li><a href="#none"><img src="@/assets/products_img/tooth_green_thumb.png" alt=""></a></li>
                                <li><a href="#none"><img src="@/assets/products_img/tooth_pink_thumb.png" alt=""></a></li>
                                <li><a href="#none"><img src="@/assets/products_img/tooth_red_thumb.png" alt=""></a></li>
                                <li><a href="#none"><img src="@/assets/products_img/tooth_silver_thumb.png" alt=""></a></li>
                                <li><a href="#none"><img src="@/assets/products_img/tooth_purple_thumb.png" alt=""></a></li>
                            </ul>
                            <div class="pick pick_option">
                                선택옵션
                            </div>
                            <div class="pick pick_items d-flex">
                                <p>구매수량</p>
                                <div class="d-flex">
                                    <button>+</button>
                                    <input type="text" value="1" />
                                    <button>-</button>
                                </div>
                            </div>
                            <div class="payment">
                                <div class="total d-flex">
                                    <p>총 상품 금액</p>
                                    <p>100,000,000,000</p>
                                </div>
                                <div class="pay_btn d-flex">
                                    <button class="save">장바구니</button>
                                    <button class="buy">바로구매</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="px-0" fluid>
            <div class="membership d-flex">
                <p class="align-self-center mx-auto">
                    솔트레인 멤버쉽 특별한 혜택 Click
                </p>
            </div>
        </v-container>
        <v-container class="px-0">
            <v-row>
                <v-col cols="9">
                    <div class="products_detail">
                        여기에 이미지 들어감
                    </div>
                </v-col>
                <v-col>
                    <div class="products_info">
                        여기에 아코디언 메뉴
                    </div>
                    <div class="side_nav">
                        여기에 메뉴바
                    </div>
                </v-col>
            </v-row> 
        </v-container>
    </v-app>
</template>
<style scoped>
.sub_root{
    padding-top: var(--small-bottom);
    box-sizing: border-box;
}
.detail_title{
    position: relative;
    border-bottom: 2px solid var(--k500-color);
}
.detail_title h2{
    padding-top: 24px;
}
.taste {
position: absolute;
top: 0;
height: 14px;
}
.explain{
    padding-bottom: 40px;
    box-sizing: border-box;
}
.price{
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 2px solid var(--k200-color);
}
.colors{
    padding: 28px 0;
    box-sizing: border-box;
    overflow: hidden;
}
.pick{
    width: 100%;
    background: var(--k100-color);
    padding: 20px;
    box-sizing: border-box;
}
.pick_option{
    margin-bottom: 20px;
}
.pick_items{
margin-bottom: 28px;
}
.pick_items button{
    width: 20px;
    height: 20px;
    padding: 16px;
    background: var(--k300-color);
    display: flex;
    align-items: center;
}
.payment{
    border-top: 1px solid var(--k200-color);
    box-sizing: border-box;
    padding: 40px 0;
}
.total{
    justify-content: space-between;
    padding-bottom: 28px;
}
.pay_btn{
    width: 100%;
}
.pay_btn button{
    width: 48%;
    height: 48px;
    padding: 14px;
    box-sizing: border-box;
    border: 1px solid var(--k500-color);
    justify-content: space-between;
}
.save{
    margin-right: 4%;
}
.buy{
    color: #fff;
    background: #000;
}
.membership{
    width: 100%;
    height: 60px;
    background: var(--k700-color);
}
.membership p{
    color: var(--white-color);
}
.products_img{
    height: 744px;
    background: var(--k100-color); 
}

.products_detail{
    height: 1200px;
    background: var(--k100-color); 
}
</style>
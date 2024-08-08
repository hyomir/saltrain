<template>
    <v-app id="products">
        <v-container>
            <div class="products_sub_menu">
                <h2><a href="#"><img src="@/assets/products_img/products_title.svg" alt="솔트레인 제품"></a></h2>
                <ul class="products_snb">
                    <li><a href="#none">COOL VACATION</a></li>
                    <li><a href="#none">ALL</a></li>
                    <li><a href="#none">RED LINE</a></li>
                    <li><a href="#none">GIFT SET</a></li>
                    <li><a href="#none">DENTAL</a></li>
                    <li><a href="#none">LIFESTYLE</a></li>
                    <li><a href="#none">FRAGRANCE</a></li>
                    <li><a href="#none">SALT &amp; GOODS</a></li>
                    <li><a href="#none">SPECIAL</a></li>
                </ul>
            </div>
                <div class="tooth_img">
                </div>
        </v-container>
        <v-container class="products_list">
            <v-row class="list_order d-flex justify-space-between">
                <p>상품수 itemes</p>
                <ul class="d-flex child-flex">
                    <li><a href="#none">신상품</a></li>
                    <li><a href="#none">상품명</a></li>
                    <li><a href="#none">낮은가격</a></li>
                    <li><a href="#none">높은가격</a></li>
                    <li><a href="#none">인기상품</a></li>
                    <li><a href="#none">사용후기</a></li>
                </ul>
            </v-row>
            <v-row>
                <v-col class="d-flex child-flex" cols="4">
                    <a class="product_item">
                        <v-img src="https://placehold.co/400x460" cover/>
                        <div class="products_text">
                            <h4 class="item_title">제품명</h4>
                            <div class="price d-flex">
                                <p><span class="r_price">정상가</span></p>
                                <div class="d-flex">
                                    <p><span class="discount">할인율</span></p>
                                    <p><span class="c_price">판매가</span></p>
                                </div>
                            </div>
                        </div>
                    </a>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<style scoped>
.products_sub_menu{
    max-width: 1280px;
    height: 188px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
    padding-top: var(--small-bottom);
    box-sizing: border-box;
    margin-bottom: var(--medium-bottom);
}
.products_sub_menu h2{
    padding-bottom: var(--s-bottom);
}
.products_sub_menu h2 a{
    display: block;
    width: 268px;
    height: 46px;
}
.products_snb{
    width: 50%;
}
.products_snb li{
    display: inline-block;
    padding-bottom: 12px;
}
.products_snb li a{
    font-size: var(--h5-font-size);
    font-weight: 700;
    color: var(--k500-color);
    border: 2px solid var(--k400-color);
    padding: 8px;
    box-sizing: border-box;
    margin-right: 20px;
    white-space: nowrap;
    transition: 0.3s;
}
.products_snb li a:hover{
    color: var(--white-color);
    border: 2px solid var(--b900-color);
    background: var(--b900-color);
    box-sizing: border-box;
}
.tooth_img{
    width: 720px;
    height: 160px;
    background: url('@/assets/products_img/tooth_deco.png') no-repeat;
    position: absolute;
    top: 64px;
    right: 6%;
}
.list_order{
    padding: 0 12px;
    margin-bottom: var(--xs-bottom);
}
.list_order ul li a{
display: block;
color: var(--k500-color);
margin-left: 14px;
}
.list_order ul li a:hover{
    color: var(--b900-color);
    font-weight: 700;
}
.product_item{
    display: block;
    width: 400px;
    border: 2px solid var(--k500-color);
    box-sizing: border-box;
}
.products_text{
    border-top: 2px solid var(--k500-color);
    padding: 20px;
    box-sizing: border-box;
    color: var(--k800-color);
}
.product_item .item_title{
    font-size:var(--medium-font-size);
    font-weight: 700;
    padding-bottom: var(--h4-font-size);
}

.product_item p{
    font-size: var(--h4-font-size);
    font-weight: 700;
}
.price{
    justify-content: space-between;
}

.product_item .r_price{
    font-size: var(--medium-font-size);
    color:var(--k300-color);
    text-decoration: line-through;
}
.product_item .discount{
    color:var(--k500-color);
    margin-right: 14px;
}
.product_item .c_price{
    font-size: var(--h4-font-size);
    color:var(--b900-color);
}
.test{
    border: 1px solid red;
}
</style>
<script>
</script>

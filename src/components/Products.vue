<template>
    <v-app id="products">
        <v-container>
            <div class="products_sub_menu">
                    <h2><a href="#"><img src="@/assets/products_img/products_title.svg" alt="솔트레인 제품"></a></h2>
                <v-row>
                    <v-col cols="12" lg="6">
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
                    </v-col>
                </v-row>
            </div>
            <div class="tooth_img"></div>
        </v-container>
        <v-container class="products_list">
            <v-row class="list_order d-flex justify-space-between">
                <p>상품수 itemes</p>
                <ul class="list_sort d-flex child-flex">
                    <li><a href="#none">신상품</a></li>
                    <li><a href="#none">상품명</a></li>
                    <li><a href="#none">낮은가격</a></li>
                    <li><a href="#none">높은가격</a></li>
                    <li><a href="#none">인기상품</a></li>
                </ul>
            </v-row>
            <v-row>
                <v-col class="d-flex child-flex"
                cols="6" lg	="4" md="4" xs="6"
                v-for="item in this.products" :key="item.id">
                    <a class="product_item">
                        <img :src="`/products/${item.pd_pic}`" cover/>
                        <div class="products_text">
                            <h4 class="item_title">{{item.name}}</h4>
                            <div class="price d-flex">
                                <p><span class="r_price"
                                v-if="item.regular_price">{{item.regular_price}}원</span>
                                </p>
                                <div class="d-flex">
                                    <p>
                                        <span class="discount" v-if="item.discount">{{item.discount}}&#37;</span>
                                        <span class="discount"></span>
                                    </p>
                                    <p><span class="c_price">{{item.price}}원</span></p>
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
/* products snb */
.products_sub_menu{
    position: relative;
    z-index: 10;
    padding-top: var(--small-bottom);
    box-sizing: border-box;
}
.products_sub_menu h2{
    padding-bottom: var(--s-bottom);
}
.products_sub_menu h2 a{
    display: block;
    width: 268px;
    height: 46px;
}
.products_snb li{
    display: inline-block;
    padding-bottom: 12px;
}
.products_snb li a{
    padding: 8px;
    margin-right: 12px;
    display: block;
    font-size: var(--h5-font-size);
    font-weight: 700;
    color: var(--k500-color);
    border: 2px solid var(--k400-color);
    box-sizing: border-box;
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

/* products list */
.list_order{
    padding: 0 12px;
    margin-bottom: var(--xs-bottom);
}
.list_sort li a{
display: block;
color: var(--k500-color);
margin-left: 14px;
}

.list_sort li a:hover{
    color: var(--b900-color);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset :6px;
}
/* products card */
.product_item{
    display: block;
    border: 2px solid var(--k500-color);
    box-sizing: border-box;
}
.product_item img{
    width: 100%;
    object-fit: cover;
}

.products_text{
    border-top: 2px solid var(--k500-color);
    padding:20px;
    box-sizing: border-box;
    color: var(--k800-color);
    font-size: var(--h4-font-size);
    font-weight: 700;
}
.item_title{
    font-size:var(--large-font-size);
    height: var(--h2-font-size);
    margin-bottom: var(--h2-font-size);
}

.price{
    justify-content: space-between;
}

.r_price{
    font-size: var(--medium-font-size);
    color:var(--k300-color);
    text-decoration: line-through;
}
.discount{
    font-size: var(--medium-font-size);
    color:var(--k500-color);
    margin-right: 14px;
}
.product_item .c_price{
    font-size: var(--h3-font-size);
    color:var(--b900-color);
}
</style>
<script>
import productData from "@/datasources/products-data";
export default{
    name:'App',
    data:()=>{
        return {
            products : productData.productsList,
        }
    }
}
</script>

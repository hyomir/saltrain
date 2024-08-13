<template>
    <v-app id="main">
        <!-- <div class="wait_load">
            <div class="load_cont">
                <h1>로딩페이지</h1>
            </div>
        </div> -->
            <v-container class="main_slider" fluid>
                <div class="slider_wrap">
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
                </div>
            </v-container>
            <v-container class="scrollSafe">
            </v-container>
            <v-container class="brand panel text-center">
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
                            <div class="wrapper">
                            <img src="@/assets/main_img/brand.png"/>
                            </div>
                        </v-col>
                    </v-row>
            </v-container>
            <div class="linear_bg">
                <v-container class="goods goodsUp">
                    <div class="goods_txt">
                        <h2>소금으로부터 개발된 생활 필수품</h2>
                        <p class="reveal">
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
                    <div class="goods_list panel">
                            <div id="del1" class="img_card" data-scrub="0.3">
                                <div class="inner-container">
                                    <img src="@/assets/main_img/goods_01.png"/>
                                    </div>
                                </div>
                            <div id="del2" class="img_card" data-scrub="0.5">
                                <div class="inner-container">
                                    <img src="@/assets/main_img/goods_02.png"/>
                                    </div>
                                    </div>
                            <div id="del3" class="img_card" data-scrub="1">
                                <div class="inner-container">
                                    <img src="@/assets/main_img/goods_03.png"/>
                                </div>
                            </div>
                            <div id="del4" class="img_card" data-scrub="0.7">
                                <div class="inner-container">
                                    <img src="@/assets/main_img/goods_04.png" alt="">
                                </div>
                            </div>
                            <div id="del5" class="img_card" data-scrub="0.5">
                                <div class="inner-container">
                                    <img src="@/assets/main_img/goods_05.png" alt="">
                                </div>
                            </div>
                            <div id="del6" class="img_card" data-scrub="1">
                                <div class="inner-container">
                                    <img src="@/assets/main_img/goods_06.png" alt="">
                                </div>
                            </div>
                    </div>
                </v-container>
                <v-container class="collaboration" fluid>
                            <div class="collabo_txt_wrap">
                                <h2 class="screen_out">협업</h2>
                                <div class="collabo_txt text-center">
                                    <span class="dc_txt">KEEP IT CLOSE</span>
                                    <p>먹을 수 있는 소금을 바탕으로 한 라이프스타일 제품을<br>
                                        보다 ‘더 가까이에서' 즐길 수 있도록<br>
                                        돕는 것은 변함없는 솔트레인의 목표입니다.
                                    </p>
                                </div>
                            </div>
                            <div class="collabo_list">
                                <div class="collabo_inner">
                                    <ul class="collabo_slider">
                                        <li><a href="#none"><img src="@/assets/main_img/collabo_01.png" alt=""></a></li>
                                        <li><a href="#none"><img src="@/assets/main_img/collabo_02.png" alt=""></a></li>
                                        <li><a href="#none"><img src="@/assets/main_img/collabo_03.png" alt=""></a></li>
                                        <li><a href="#none"><img src="@/assets/main_img/collabo_04.png" alt=""></a></li>
                                        <li><a href="#none"><img src="@/assets/main_img/collabo_05.png" alt=""></a></li>
                                        <li><a href="#none"><img src="@/assets/main_img/collabo_06.png" alt=""></a></li>
                                    </ul>
                                </div>
                            </div>
                </v-container>
                <v-container class="products" fluid>
                                <div class="products_txt">
                                    <h2>Saltrain Products</h2>
                                    <a href="#none">more<span>+</span></a>
                                </div>
                            <div class="products_list">
                                <button class="slider-prev">Previous</button>
                                <button class="slider-next">Next</button>
                                <div class="products_slider d-flex">
                                    <div class="slide_cont">
                                        <a href="#none" class="cont_ref">
                                            <img src="@/assets/main_img/products_01.png" alt="">
                                        </a>
                                    </div>
                                    <div class="slide_cont">
                                        <a href="#none" class="cont_ref">
                                            <img src="@/assets/main_img/products_02.png" alt="">
                                        </a>
                                    </div>
                                    <div class="slide_cont">
                                        <a href="#none" class="cont_ref">
                                            <img src="@/assets/main_img/products_03.png" alt="">
                                        </a>
                                    </div>
                                    <div class="slide_cont">
                                        <a href="#none" class="cont_ref">
                                            <img src="@/assets/main_img/products_04.png" alt="">
                                        </a>
                                    </div>
                                    <div class="slide_cont">
                                        <a href="#none" class="cont_ref">
                                            <img src="@/assets/main_img/products_05.png" alt="">
                                        </a>
                                    </div>
                                    <div class="slide_cont">
                                        <a href="#none" class="cont_ref">
                                            <img src="@/assets/main_img/products_06.png" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                </v-container>
                <v-container class="mx">
                    <v-row>
                        <v-col cols="12">
                            <div class="deco_big_logo"><img src="@/assets/main_img/logo_lx_white.svg" alt=""></div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
    </v-app>
</template>
<style scoped>  
@import url('@/assets/css/main.css');

.slider-prev {
  position:absolute;
  z-index:1;
  top:50%;
  left:4%;
}
.slider-next {
  position:absolute;
  z-index:1;
  top:50%;
  right:4%;
}
</style>
<script>
/*gsap 추가*/
document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

/* lenis추가 */
const lenis = new Lenis({
lerp: 0.07
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

/*brand*/
var panels = gsap.utils.toArray(".panel");
panels.pop();
panels.forEach((panel, i) => {
let tl = gsap.timeline({
    scrollTrigger:{
    trigger: ".brand",
    start: "top top",
    end:"300%",
    pin: true,
    scrub: true,
    }
});
// 이미지 줄어들 때 애니메이션
tl.fromTo(panel, 1, {y:0, rotate:0, scale:1, opacity:1},
{y:0, rotateX:0, scale:0.8, opacity:1}, 0)
    .to(panel, 0.1, {opacity:0})
});

// 굿즈
//섹션 고정
let goodsUp = gsap.utils.toArray('.goodsUp');
let goodTl = gsap.timeline({
    scrollTrigger:{
        trigger:goodsUp,
        start: "top top",
        end:"+=150%",
        pin: true,
        scrub: true,
    }})

//이미지 움직이기
let delSections = gsap.utils.toArray(".img_card");
delSections.forEach((section, i) => {
let imageAnim = gsap.to(section.querySelectorAll(".img_card img"), {
    y: "-100vh",
    ease: "none",
    paused: true
});

let progressTo = gsap.quickTo(imageAnim, "progress", {ease: "power3", duration: parseFloat(section.dataset.scrub) || 0.1});

gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none",
    scrollTrigger: {
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: self => progressTo(self.progress)
    }
});

});
// 콜라보레이션
    let collaboSection = document.querySelector(".collaboration");
    let collaboSlider = document.querySelector(".collabo_slider");
    let collaboInner = document.querySelector(".collabo_inner");

let collaboTl = gsap.timeline({
        scrollTrigger:{
            trigger:collaboSection,
            pin: true,
            scrub: true,
            start: "top top",
            end:"+=199%",
        }
    })

collaboTl.to(collaboSlider,{
    x: ()=> -collaboSlider.clientWidth + collaboInner.clientWidth,
    scrollTrigger: {
    trigger: collaboSection,
            start: "center center",
            end:"+=200%",
            scrub: 0.3,
    }
    })

// 제품 페이지
let productsSection = document.querySelector(".products")
let productsSlider = document.querySelector(".products_slider")
let productsTl = gsap.timeline({
    scrollTrigger:{
        trigger:productsSection,
        start: "top top",
        end: "bottom bottom",
        pin:true,
        scrub:true,
        markers:true
    }
})
productsSlider.innerHTML += (productsSlider.innerHTML)*2
const products = gsap.utils.toArray(".slide_cont")

const setAnimation = () => {
const distance = productsSlider.clientWidth;
const pdWidth = products[0].clientWidth;

const cloneSlides = () => {
    const slides = Array.from(productsSlider.children);
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        productsSlider.appendChild(clone);
    });
};
// 호출 시점
cloneSlides();
gsap.to(products, {
    repeat: -1,
    ease: 'none',
    x: `+=${distance}`,
    duration: 10,
    modifiers: {
        x: gsap.utils.unitize(gsap.utils.wrap(-distance / 2, 0), "px")},
});
};

setAnimation();
// 메인 슬라이더 로고 - 기묘함
let sliderWrap = gsap.utils.toArray(".slider_wrap");
gsap
    .timeline({
    scrollTrigger: {
        trigger: sliderWrap,
        start: "center center",
        end: "+=150%",
        pin: true,
        scrub: true,
    }
    })
    .to(".box_logo", {
    scale: 12,
    transformOrigin: "center center",
    ease: "power2.inOut",
    })

});
</script>

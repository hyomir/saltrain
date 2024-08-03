<template>
    <div id="about">
        <v-main class="v_main">
            <v-container class="about_goal">
                <v-row class="d-flex about_goal_cont">
                    <v-col xs="12" sm="6" md="6">
                            <img src="@/assets/about_01.jpg" class="about_01_img">
                    </v-col>
                    <v-col xs="12" sm="6" md="6" class="about_goal_right align-self-center">
                            <h2>BRAND GOAL</h2>
                            <div class="txt_wrap">
                            <p class="dc_txt about_box_01">&#39; KEEP IT CLOSE &#39;</p>
                            </div>
                            <p class="txt_01">국내산 프리미엄 소금 &#39;그레이 솔트&#39; 토판염 기반의 라이프스타일 브랜드</p>
                            <p class="saltrain_logo dc_txt">Saltrain</p>
                            <p class="txt_02 line_h">  
                                먹을 수 있는 소금을 바탕으로 한 <br> 라이프스타일 프로덕트를 보다 &#39;더 가까이에서&#39;<br>
                                즐길 수 있도록 돕는 것은 변함없는 솔트레인의 목표입니다&#46;
                            </p>
                            <img src="@/assets/about_02.jpg" class="about_02_img">
                    </v-col>
                </v-row>
            </v-container>

            <!-- brand value -->
            <v-container fluid>
                <v-row>
                    <v-col xs="12">
                    <div class="about_value">
                    <div class="about_value_cover"></div>
                    <div class="about_value_cont">
                        <h2>BRAND VALUE</h2>
                        <p class="dc_txt about_box_02">&#39; Life essentials make you GOOD &#39;</p>
                        <p class="line_h mb_32">솔트레인이 정의하는 &#39;좋음&#40;GOOD&#41;&#39;은 사용자가 우리의 제품을<br>
                            보고&#44; 쓰고&#44; 입고&#44; 바르는 모든 과정에서 얻는 긍정적인 감정을 의미합니다&#46;
                        </p>
                        <p class="line_h mb_32">
                            매일 사용할 수 밖에 없는 생활 필수품에 대한 진정한 만족감을 위해 솔트레인은 <br>
                            원료 선택부터 디자인까지&#44; 모든 과정에서 최고의 퀄리티를 우선시 합니다&#46;
                        </p>
                        <p class="line_h">
                            꾸미기보다 가꾸기에 집중하는 일상의 작은 돌봄&#46; <br>
                            기분 좋은 에센셜 아이템을 통해 더욱 만족스러운 라이프를 누리는 것&#46; <br>
                            감각적인 당신을 위해 솔트레인이 제공하는 궁극적인 가치입니다&#46;
                        </p>
                </div>
                </div>
                </v-col>
                </v-row>
            </v-container>  

            <!-- material -->
            <v-container class="about_material">
                <v-row class="material_cont">
                <v-col>
                <div class="material_left">
                    <img src="@/assets/about_04.jpg" class="about_material_img">
                </div>
                </v-col>
                
                <v-col class="align-self-center">
                <div class="material_right">
                    <h2>MATERIAL</h2>
                    <div class="txt_wrap">
                    <p class="dc_txt about_box_03">&#39; GRAY SALT &#39;</p>
                    </div>
                    <p class="line_h mb_32">
                        갯벌을 다져 만든 흙판에서 생산하는 천일염으로 <br>
                        장인이 자연 갯벌을 다져 전통 방식으로 소량 생산한 소금입니다&#46;
                    </p>
                    <p class="line_h mb_32">
                        국제 미식 품평회&#40;ITQI&#41; &#34;2 STAR&#34;&#44; <br>
                        세계적 인증심사&#40;Superior Taste Award&#41;를 수상 받았습니다&#46;
                    </p>
                    <p class="line_h">
                        미네랄 함량 UP 나트륨 DOWN<br>
                        다양한 유기화합물의 영양분과 미네랄을 다량 함유하고 있습니다&#46;
                    </p>
                </div>
            </v-col>
            </v-row>
            </v-container>
            <p class="dc_txt S_logo">Saltrain</p>
        </v-main>
    </div>
</template>

<style>
#about{
    width: 100%;
    background: #161616;
    height: 2730px;
    position: relative;
}

.v_main{
    width: 100%;
    background: #161616;
    color: #fff;
 }

.dc_txt{font-size:  var(--h1-font-size); 
    font-family: "urbane-condensed", sans-serif; 
    font-weight: 700; font-style: normal;
   }

h2{
    margin-bottom: 32px;
}

p{
    font-size: 20px;
}

.line_h{
    line-height: 1.5;
}


.about_goal_cont{
    padding: 5rem 0 7.5rem;
}


.about_01_img{
    width: 505px;
    height: 632px;
   /* margin-right: 100px;*/
}

.about_02_img{
    width: 635px;
    height: 410px;
}

.about_box_01{
    width: 329px;
    background:#1A51E6;
    padding: 12px 10px 3px 20px;
    margin-bottom: 3.75rem;
}

#about .saltrain_logo{
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-size: 4rem;
}

.txt_02{
    margin-bottom: 132px;
}

/* about_value */

.about_value{
    width: 100%;
    height: auto;
    background: url(../assets/about_bg.jpg) no-repeat;
    background-size: cover;
    position: relative;
    z-index: 0;
}


.about_value_cover{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.about_value_cont{
    padding: 7.5rem 0;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
}

.about_box_02{
    width: 640px;
    margin: 0 auto 3.75rem;
    background:#1A51E6;
    padding: 15px 12px 10px 15px;
}

.mb_32{
    margin-bottom: 32px;
}

/*material */

.about_material{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    padding: 7.5rem 0;
}

.about_material_img{
    width: 505px;
    height: 470px;
 /*  margin-right: 100px;  */
}



.about_box_03{
    width: 257px;
    margin-bottom: 3.75rem;
    background:#1A51E6;
    padding: 15px 12px 8px 15px;
}

#about .S_logo{
    font-size: 140px;
    position: absolute;
    right: 134px;
    bottom: 120px;
}


@media (max-width: 600px){
    .about_01_img{
        display: block;
        width: 100%;
    }
    .about_goal_right{
        text-align: center;
        margin-top: 2.5rem;
    }

    .about_goal_cont{
        padding-top: 0;
    }

    .txt_wrap{
        width: 100%;
    }
    .about_box_01{
        margin: auto;
    }
    p{
        font-size: 14px;
    }
    .about_02_img{
        display: block;
        width: auto;
    }

    .txt_02{
        margin-bottom: 3.75rem;
    }

    .material_right{
        text-align: center;
    }

    .about_material_img{
        margin-right: 0;
    }

    .about_box_03{
        margin: auto;
    }

    .S_logo{
        display: none;
    }
}

</style>
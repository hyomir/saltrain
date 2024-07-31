<template>
    <div id="app">
        <v-main >
            <v-container class="about_goal" width="1240px" >
                <!-- brand goal -->
                 <div class="goal_txt">
                <h2>BRAND GOAL</h2>
                <p class="txt_01">국내산 프리미엄 소금 '그레이 솔트' 토판염 기반의 라이프스타일 브랜드</p>
                <p>  
                    먹을 수 있는 소금을 바탕으로 한 라이프스타일 프로덕트를 보다 '더 가까이에서' <br>
                    즐길 수 있도록 돕는 것은 변함없는 솔트레인의 목표입니다.
                </p>
                </div>
                <p class="goal_img_01"><img src="@/assets/about_01.jpg" width="505px" height="632px"></p>
                <p class="goal_img_02"><img src="@/assets/about_02.jpg" width="635px" height="410px"></p>
                <p></p>
            </v-container>

            <v-container class="about_value">
                <!-- brand value -->
                <h2>BRAND VALUE</h2>
                <p>솔트레인이 정의하는 '좋음(GOOD)'은 사용자가 우리의 제품을<br>
                    보고, 쓰고, 입고, 바르는 모든 과정에서 얻는 긍정적인 감정을 의미합니다.
                </p>
                <p>
                    매일 사용할 수 밖에 없는 생활 필수품에 대한 진정한 만족감을 위해 솔트레인은 <br>
                    원료 선택부터 디자인까지, 모든 과정에서 최고의 퀄리티를 우선시 합니다.
                </p>
                <p>
                    꾸미기보다 가꾸기에 집중하는 일상의 작은 돌봄. <br>
                    기분 좋은 에센셜 아이템을 통해 더욱 만족스러운 라이프를 누리는 것. <br>
                    감각적인 당신을 위해 솔트레인이 제공하는 궁극적인 가치입니다.
                </p>
            </v-container>   

            <v-container class="about_material">
                <!-- material -->
                <h2>MATERIAL</h2>
                <p><img src="@/assets/about_04.jpg" alt=""></p>
                <p>
                    갯벌을 다져 만든 흙판에서 생산하는 천일염으로
                    장인이 자연 갯벌을 다져 전통 방식으로 소량 생산한 소금입니다.
                </p>
                <p>
                    국제 미식 품평회(ITQI) “2 STAR”, <br>
                    세계적 인증심사(Superior Taste Award)를 수상 받았습니다.
                </p>
                <p>
                    미네랄 함량 UP 나트륨 DOWN <br>
                    다양한 유기화합물의 영양분과 미네랄을 다량 함유하고 있습니다.
                </p>
            </v-container>
        </v-main>
    </div>
</template>

<style>

#app{
    width: 100%;
}



v-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.about_goal{
    position: relative;
}



.goal_txt{
    position: absolute;
    top:80px;
    left:605px;
}

.goal_txt > .txt_01{
    margin-top: 60px;
    margin-bottom: 7px;
}

.goal_img_01{
    position: absolute;
    top:80px;
    left:0;
}

h2{
    margin-bottom: 32px;
}





</style>
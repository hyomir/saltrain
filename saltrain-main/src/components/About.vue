<template>
    <div id="about">
        <v-main class="v_main">
            <v-container class="about_goal">
                <v-row class="d-flex about_goal_cont mx-auto">
                    <v-col cols="6" xs="12" sm="12" lg="6" class="about_goal_left hidden">
                            <img src="@/assets/about_01.jpg" class="about_01_img">
                    </v-col>
                    <v-col cols="6" xs="12" sm="12" lg="6" class="about_goal_right align-self-center">
                        <div class="about_goal_right_top  hidden01">
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
                        </div>
                        <div class="about_goal_right_bottom hidden">
                            <img src="@/assets/about_02.jpg" class="about_02_img">
                        </div>
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
                                    <div class="about_value_cont_01 ">
                                        <h2 class="slideDown">BRAND VALUE</h2>
                                        <p class="dc_txt about_box_02">&#39; Life essentials make you GOOD &#39;</p>
                                    </div>
                                    <div class="about_value_cont_02 ">
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
                        </div>
                    </v-col>
                </v-row>
            </v-container>  

            <!-- material -->
            <v-container class="about_material">
                <v-row class="material_cont mx-auto">
                    <v-col cols="6" xs="12" sm="12" lg="6">
                        <div class="material_left hidden">
                            <img src="@/assets/about_04.jpg" class="about_material_img">
                        </div>
                    </v-col>
                        
                    <v-col class="align-self-center">
                        <div class="material_right hidden01">
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
            <div class="dc_txt slide-container">
                <p class="S_logo slide">Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain
                    Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain Saltrain
                </p>
            </div>
        </v-main>
    </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer for .about_goal
    const goalObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const leftElement = entry.target.querySelector('.about_goal_left');
                const rightTopElement = entry.target.querySelector('.about_goal_right_top');
                const rightBottomElement = entry.target.querySelector('.about_goal_right_bottom');
               
                if (leftElement) {
                    leftElement.classList.add('fade-down');
                }

                if (rightBottomElement) {
                    rightBottomElement.classList.add('fade-down');

                    if (rightTopElement) {
                            rightTopElement.classList.add('fade-in');
                        }
                }
                
                goalObserver.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('.about_goal').forEach(element => {
        goalObserver.observe(element);
    });
 
    // Intersection Observer for .about_value
    const valueObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cont01Element = entry.target.querySelector('.about_value_cont_01 ');
                const cont02Element = entry.target.querySelector('.about_value_cont_02 ');
                
                if (cont01Element) {
                    cont01Element.classList.add('slide-down');
                }

                if (cont02Element) {
                    setTimeout(() => {
                        cont02Element.classList.add('slide-down');
                    }, 500); // 1.5s delay for cont_02 to start after cont_01
                }
                
                valueObserver.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('.about_value').forEach(element => {
        valueObserver.observe(element);
    });

    // Intersection Observer for .about_material
    const materialObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const leftElements = entry.target.querySelectorAll('.material_left');
                const rightElements = entry.target.querySelectorAll('.material_right');
               
                leftElements.forEach((leftElement, index) => {
                    setTimeout(() => {
                        leftElement.classList.add('fade-down');
                    }, index * 500); // Staggered animation for left elements
                });

                rightElements.forEach((rightElement, index) => {
                    setTimeout(() => {
                        rightElement.classList.add('fade-in');
                    }, (index + leftElements.length) * 500); // Staggered animation for right elements, after left elements
                });

                materialObserver.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll('.about_material').forEach(element => {
        materialObserver.observe(element);
    });
});
</script>

<style>
.hidden{
    opacity: 0;
    transition: all 1s;
    transform: translateX(-100%);
}

/* about animation */

@keyframes fadeDown{
    from {
        transform: translateX(0%); /* 오른쪽 끝에서 시작 */
    }
    to {
        transform: translateX(-100%); /* 왼쪽 끝으로 이동 */
    }
}

.fade-down{
    opacity: 1;
    transform: translateY(0);
}

#about .about_goal_left{transition: all 1.5s ease;}
#about .about_goal_right_top{transition: all 1.5s ease;}
#about .about_goal_right_bottom{transition: all 2s ease;}

/* value animation */

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-20px); /* Initial position for animation */
    }
    to {
        opacity: 1;
        transform: translateY(0); /* End position for animation */
    }
}

.slide-down {
    animation: slide-down 1s ease-out forwards;
}

#about .about_value_cont_01,
#about .about_value_cont_02 {
    opacity: 0;
    transform: translateY(-20px);
}

/* material animation */

.hidden01{
    opacity: 0;
    transition: all 2s;
}

.fade-in{
    opacity: 1;
}

#about .material_left {
   
    transition: opacity 1s ease-out, transform 1s ease-out;
}

#about .material_right {
   
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.slideDown {
    animation: slide 
}

@keyframes slideDown {
    from {
       opacity: 0; 
    }
    to {
        opacity: 1; 
    }
}

.slide {
    display: inline-block;
    animation: slide 20s linear infinite; 
}

@keyframes slide {
    from {
        transform: translateX(0%); /* 오른쪽 끝에서 시작 */
    }
    to {
        transform: translateX(-100%); /* 왼쪽 끝으로 이동 */
    }
}

/* css 효과 */

#about{
    width: 100%;
    background: #161616;
    height: 3000px;
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

/* about_goal */

.about_goal_cont{
   width:1280px;
    margin: 0 auto;
    padding: 5rem 0 7.5rem;
}

.about_goal_left{
    opacity: 1;
    width: 100%;
}

.about_01_img{
    object-fit: cover;
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
   width: 1280px;
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

/* material */

.about_material{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    padding: 7.5rem 0;
}

.material_cont{
    max-width: 1280px;
    padding: 7.5rem 0;
}

.about_material_img{
    width: 505px;
    height: 470px;
}



.about_box_03{
    width: 257px;
    margin-bottom: 3.75rem;
    background:#1A51E6;
    padding: 15px 12px 8px 15px;
}

#about .S_logo{
    width: 100%;
    font-size: 120px;
    position: relative;
    margin: 120px;
}

.slide-container {
    overflow: hidden; /* 컨테이너 밖으로 나가는 내용 숨김 */
    white-space: nowrap; /* 텍스트가 한 줄로 유지되도록 설정 */
    width: 100%; /* 컨테이너 너비를 100%로 설정 */
    box-sizing: border-box;
  }
  

@media (min-width: 600px)and (max-width: 900px){
    #about .S_logo{
        display: none;
    }
}


/*
@media (min-width: 600px){
    .about_goal{
        padding: 0;
    }
    
    .about_01_img{
        position: relative;
        display: block;
        width: 100%;
    }
    .about_goal_right{
        text-align: center;
        margin-top: 2.5rem;
    }

    .about_goal_cont{
        padding-top: 0;
        text-align: center;
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
}*/

</style>


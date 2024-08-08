<script setup>
    const collection_item_list = [
        {id: 0, name: 'ADLV'},
        {id: 1, name: 'BLIND'},
        {id: 2, name: 'BOMARKET'},
        {id: 3, name: 'CROW CANYON'},
        {id: 4, name: 'D_DEPARTMENT SEOUL'},
        {id: 5, name: 'DU'},
        {id: 6, name: 'ECRU'},
        {id: 7, name: 'FIVE BEANS'},
        {id: 8, name: 'GRAFEN'},
        {id: 9, name: 'GRAFFLEX'},
        {id: 10, name: 'HOTELSCOMBINED'},
        {id: 11, name: 'JEJUINDI'},
        {id: 12, name: 'LECOQ GOLF'},
        {id: 13, name: 'LMC'},
        {id: 14, name: 'LOWCLASSIC'},
        {id: 15, name: 'MIND BRIDGE_SMILEY ORIGINALS'},
        {id: 16, name: 'NAMERCLOTHING'},
        {id: 17, name: 'NICE WEATHER'},
        {id: 18, name: 'NUMBERING'},
        {id: 19, name: 'PUEBCO'},
        {id: 20, name: 'SAD SMILE'},
        {id: 21, name: 'TADA'},
        {id: 22, name: 'The Green Cup'},
        {id: 23, name: 'Toy Story_TinyTAN'},
        {id: 24, name: 'WKNDRS'}
    ]

    const modules = import.meta.glob("../assets/collection_images/*.jpg", { eager: true });

    const images = [];

    //이미지 및 링크 설정
    for (const img in modules) {
        images.push(modules[img].default);
    }

    var now_link = window.location.search;

    const params = new URLSearchParams(now_link);

    const read_number = params.get('read_number');
    function go_back(){
        this.$router.go(-1);
    }
</script>

<template>
    <div>
        <h2>{{collection_item_list[read_number].name}}</h2>
        <div class="read_box">
            <!-- 임시 이미지 -->
            <img 
            :src="images[read_number]"
            alt=""
            >
            <p class="bottom_menu">
                <a href="/collection"
                class="collection_back"
                >뒤로가기</a>
            </p>
        </div>
    </div>
</template>

<style scoped>
    .read_box{
        margin: 0 auto;
        max-width: 1280px;
    }
    .read_box img{
        margin: 0 auto;
    }

    .bottom_menu{
        margin-top: 28px;
        text-align: right
    }

    .collection_back{
        padding: 8px 20px;
        margin-right: 10px;
        background: #000000;
        color: #fff;
        font-size: 1.25rem;
        margin-bottom: 10%;
    }

</style>
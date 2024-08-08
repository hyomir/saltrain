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
    const Collection_read = [];
    var i = 0;

    //이미지 및 링크 설정
    for (const img in modules) {
        var Collection_read_item = "/Collection_read?read_number=" + i
        Collection_read.push(Collection_read_item);
        images.push(modules[img].default);
        i++
    }

</script>

<template>
    <div id="collection">
        <ul class="collection_box">
            <li
            v-for="(img, index) of images"
             :key="index"
             class="collection_item">
            <a :href="Collection_read[index]">
                <img :src="img" />
                <p>{{collection_item_list[index].name}}</p>
            </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>

    img{
        width: 100%;
    }
    a{
        color: black;
    }
    a:hover{
        color: #666666;
    }
    #collection{
        max-width: 1280px;
        margin: 0 auto;
    }
    .collection_box{
        display: grid;
        grid-template-columns: 30% 30% 30%;
        justify-content: space-evenly;
    }
    .collection_item{
        text-align: center;
        margin-bottom: 10%;
    }
    .collection_item img{
        margin-bottom: 8px;
    }

</style>
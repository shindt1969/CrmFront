<template lang="pug">

.notecategoryarea
    .title 記事類別
    .searchcategory
        a-input-search(v-model:value='value' placeholder='搜尋記事類別' @search='onSearch')

    .categorylist
        div(v-for="category in categories" :key="category.id")
            a-checkbox(v-model:checked='category.checked' :disabled='disabled')
                | {{ category.name }}
            br
    .addCategory
    a-input-group(compact='')
        a-input(v-model:value='value19' placeholder='新增記事類別' style='width: calc(100% - 100px)')
        a-button(type='primary') 新增

</template>
        
<script>
// @ is an alias to /src

import { defineComponent, ref, computed } from 'vue';
import Dolist4 from "../Dolist4.vue";
import Note from "./Note.vue";
import store from '@/store/index';

export default defineComponent({
    name: "NoteCategory",
    props: ["categories"],
    setup(props) {

        const onSearch = (value) => {
            console.log(value);
        }

        

        return {};
    }
});
</script>
    
<style scoped>
.notecategoryarea {
    /* position: absolute; */
    box-shadow: 0px 6px 20px 0px #43434b;
    bottom: 36px;
    background: #fff;
    margin-top: 5px;
    /* margin-left: 200px; */
    width: 300px;
    height: 300px;
    z-index: 2;
    --height: height;
}
.title{
    height:30px; 
    padding: 5px;
}

.searchcategory {
    height: 30px;
}

.categorylist {
    height: 190px;
    overflow: auto;
    /* background-color: coral; */
}

.addCategory{
    height:10px; 
    padding: 1px;
    }
</style>
    
    
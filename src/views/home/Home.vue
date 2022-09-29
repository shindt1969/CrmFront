<template lang="pug">

a-row(:gutter='[40,16]')
    NoteCategory(v-show="OK")

    a-col(:span='16' style="margin-top:50px")
        a-card(style="height: 800px;")
            Note(@update="showNoteCategoryArea")
            Dolist4
      
</template>

<script>
// @ is an alias to /src

import { defineComponent, ref } from 'vue';
import Dolist4 from "../Dolist4.vue";
import Note from "./Note.vue";
import NoteCategory from "./NoteCategory.vue";


export default defineComponent({
    name: "Home",

    components: {
        NoteCategory,
        Dolist4,
        Note
    },
    setup() {
        const OK = ref(true);

        const somebodyWantMeToDo = () => {
            console.log("do womething")
        }

        const showNoteCategoryArea = e => {
            OK.value = !(OK.value);
            console.log('click', OK.value);
        };

        return { OK, showNoteCategoryArea };
    }
});
</script>

<style lang="less" scoped>
.home {
    .user {
        margin-left: 1000px;
        width: 10000;
    }
}
</style>

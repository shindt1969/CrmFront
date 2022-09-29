<template lang="pug">

.hello 
    .innerhehho
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{ overflow: 'auto', left: 0, top: 0, bottom: 0 }")
            | {{ label }}
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{ overflow: 'auto', left: 0}")
            | {{ label }}

</template>
        
<script>
// @ is an alias to /src

import { defineComponent, ref, computed } from 'vue';
import Dolist4 from "../Dolist4.vue";
import Note from "./Note.vue";


export default defineComponent({
    name: "NoteCategory",
    setup() {

        const checked = ref(false);
        const disabled = ref(false);

        const label = ref("hello");

        return { checked, disabled, label };
    }
});
</script>
    
<style scoped>
.hello {
    position: absolute;
    /* -webkit-box-shadow: 0px 6px 20px 0px #43434b; */
    box-shadow: 0px 6px 20px 0px #43434b;
    bottom: 36px;
    background: #fff;
    /* display: block; */
    /* -webkit-box-shadow: 0px 5px 15px -5px rgb(0 0 0 / 51%); */
    /* -o-box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.506); */
    margin-bottom: 350px;
    margin-left: 200px;
    width: 300px;
    height: 220px;
    z-index: 2;
}
.innerhehho{
    width: 300px;
    height: 110px;
}

</style>
    
    
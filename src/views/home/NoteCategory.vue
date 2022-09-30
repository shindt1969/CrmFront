<template lang="pug">

.hello
    .innerhello(justify="center" align="left")
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{left: 0, top: 0, bottom: 0 }")
            | {{ label }}
        br
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{left: 0, top: 0, bottom: 0 }")
            | {{ label }}
        br
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{left: 0, top: 0, bottom: 0 }")
            | {{ label }}
        br
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{left: 0, top: 0, bottom: 0 }")
            | {{ label }}
        br
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{left: 0, top: 0, bottom: 0 }")
            | {{ label }}
        br
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{left: 0, top: 0, bottom: 0 }")
            | {{ label }}
        br
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{left: 0, top: 0, bottom: 0 }")
            | {{ label }}
        br
        a-checkbox(v-model:checked='checked' :disabled='disabled' :style="{left: 0, top: 0, bottom: 0 }")
            | {{ label }}
        br

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

        const label = ref("hello ");

        return { checked, disabled, label };
    }
});
</script>
    
<style scoped>
.hello {
    /* position: absolute; */
    box-shadow: 0px 6px 20px 0px #43434b;
    bottom: 36px;
    background: #fff;
    margin-top: 5px;
    /* margin-left: 200px; */
    width: 300px;
    height: 220px;
    z-index: 2;
}
.innerhello{
    width: 300px;
    height: 150px;
    overflow : auto;
    /* background-color: coral; */
}

</style>
    
    
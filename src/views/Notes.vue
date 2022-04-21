<template >
<!-- <ul :class="['box',{open:isOpen}]">    -->

<ul>                                         
<li v-for="(list,index) in lists"     
 :key="list.code"
 v-show="list.show"
 :class="[list.class]"
 >  
 <router-link :to="{path: '/itemnotes/'+list.age}">
 編號:{{index+1}} 姓名:{{list.name}} 性別 {{list.sex}}  身高 {{list.height}}  
 </router-link>                               
</li>                                        
</ul>

<!-- <router-link :to="{path: '/'}" >  123 </router-link> -->
<!-- <ul> 
<li>
<router-link  v-for="(list,index) in lists"
:key="list.code"
v-show="list.show"
:class="[list.class]"
:to="{path: '/'}"
>
編號:{{index+1}} 姓名:{{list.name}} 性別 {{list.sex}}  身高 {{list.height}} 
</router-link>
</li>
</ul>  -->



</template>
<script>
import { defineComponent,ref } from 'vue';

export default defineComponent({
  setup() {
   const lists  = ref([
   { name: 'DOF', sex: 'man', age:'21', height: '173', show: true, class: 'blue' },
   { name: 'WTO', sex: 'man', age:'26', height: '165', show: true, class: 'blue' },
   { name: 'PSP', sex: 'man', age:'33', height: '193', show: true, class: 'blue' }])

    return {
      lists
    };
  },

});
</script>
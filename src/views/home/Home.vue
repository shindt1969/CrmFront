<template lang="pug">

a-row(:gutter='[40,16]')

  a-col(:span='16' style="margin-top:50px")
     a-card
      Note
  
      Dolist3
      //- (:props1="" )
      
</template>

<script>
// @ is an alias to /src

import { defineComponent } from 'vue';
import  Dolist3 from "../Dolist3.vue";
import  Note from "./Note.vue";


export default  defineComponent( {
  name: "Home",

  components: {
     Dolist3,
     Note
  },
  setup(){

    return{   };
  }
});
</script>

<style lang="less" scoped>
.home{
  .user{
    margin-left: 1000px;
    width: 10000;
  }
}


</style>

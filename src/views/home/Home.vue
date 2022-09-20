<template lang="pug">

a-row(:gutter='[40,16]')

  a-col(:span='16' style="margin-top:50px")
     a-card
      Note
      Dolist2
      //- (:props1="" )
      
</template>

<script>
// @ is an alias to /src

import { defineComponent } from 'vue';
import  Dolist2 from "../Dolist2.vue";
import  Note from "./Note.vue";


export default  defineComponent( {
  name: "Home",

  components: {
     Dolist2,
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

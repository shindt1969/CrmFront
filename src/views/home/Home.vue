<template lang="pug">

Note
a-row(:gutter='[40,16]')
  a-col(:span='16' style="margin-top:400px" height="450px")
     a-card
        Dolist
      
      
</template>

<script>
// @ is an alias to /src

import { defineComponent } from 'vue';
import  Dolist from "../Dolist.vue";

import HelloWorld from "@/components/HelloWorld.vue";



export default  defineComponent( {
  name: "Home",

  components: {
    HelloWorld,
     Dolist
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

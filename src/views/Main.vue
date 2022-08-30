<template lang="pug">
a-layout
  a-layout-sider(class="lay-container")
    common-aside
  a-layout(class="r-container")
    common-header
    
    a-layout-content
        router-view
    a-layout-footer Footer
     
</template>

<script>
import { defineComponent } from 'vue'
import  CommonHeader from "../components/CommonHeader.vue";
import  CommonAside from "../components/CommonAside.vue";

export default defineComponent({
    components:{
    CommonHeader,
    CommonAside

    },
});
</script>

<style lang="less" scoped>
.r-container{
    flex-wrap: wrap;
}

</style>



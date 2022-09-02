<template lang="pug">
a-layout(style='min-height: 100vh')

      common-aside
      a-layout
       common-header 
       a-layout-content
        router-view
       a-layout-footer Footer
          

//-    a-layout
//-        <a-layout-header style="background: #fff; padding: 0" />
   
//-    a-layout   
//-     a-layout-header(class="r-container")
//-         common-header 
   
     
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

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-header {
  background: #6aa0c7;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .ant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}


</style>



<template lang="pug">
a-layout
  a-layout-header.header(:style='{ lineHeight: "64px" }')
    .logo
      a-menu(v-model:selectedkeys='selectedKeys1' theme='dark' mode='horizontal' :style='{ lineHeight: "64px",height: "45px" }')
        a-menu-item(key='1') 
         router-link(to='/customerSearch') 客戶
        a-menu-item(key='2') 
         router-link(to='/customerConsumption') 消費
        a-menu-item(key='3') 
         router-link(to='/report') 報表

a-radio-group(v-model:value='switch' class = "radiobutton" size="small")
  a-radio-button(value='large') 客戶輪廓報表
  a-radio-button(value='default') 消費分析報表
  a-radio-button(value='small') 使用者管理報表
  a-radio-button(value='small') 工作分析報表
  a-radio-button(value='small') 標籤分析報表
  a-radio-button(value='small') 記事分析

a-collapse(v-model:activekey='activeKey' accordion class="rowinput"  expand-icon-position="right")
  a-collapse-panel(key='1' header='篩選')
    a-cascader(v-model:value='value' placeholder='Please select' size='large' :options='options')
a-image(:width='200' :src="headImg")


 
</template>

<script>
import { defineComponent, reactive,ref,SmileOutlined } from "vue";
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

export default defineComponent({
    components:{
         },

   setup() {
    const size = ref('large'); 
    const activeKey = ref([]);
    // const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const value = ref([]); 

    // const switch =
    
    const headImg = require("./1.png")



    return {size,activeKey,value,options,headImg};
  },

});

</script>

<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(253, 253, 253, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 10px 0 16px 10px;
}

.site-layout-background {
  background: #fff;
}
.mock{
 height: 50px;
 width: 200px;
 position:absolute;
 top:43px;
 left:790px
}
.mock .mock-block {
  display: inline-block;
  padding: 2px 2px 3px 3px;
  height: 1px;
  background: rgba(150, 150, 150, 0.2);
}
.radiobutton{
 position:absolute;
 top:420px;
 left:200px

}
.rowinput{
width: 130px;
position:absolute;
top:100px;
left:890px

}
</style>

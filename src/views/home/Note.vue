<template lang="pug">

div(:span='18' style="margin:10px 20px;")   
    .card-container(type="flex" justify="center" align="left") 
      a-tabs(v-model:activekey='activeKey' type='card' style="margin-left:100;")
        a-tab-pane(key='1' tab='個人記事')
          a-textarea(v-model:value='value' placeholder='Basic usage' :rows='4' show-count :maxlength='100' size="large")
        a-tab-pane(key='2' tab='客戶記事')
          a-textarea(v-model:value='value' placeholder='Basic usage' :rows='4')
        a-tab-pane(key='3' tab='公司記事')
          a-textarea(v-model:value='value' placeholder='Basic usage' :rows='4')
      div(style="background-color:aqua; height: 40px;")
        button(type='button')
          img(src='../../assets/images/clock.png' height="20")
        a-button(type="primary" style='margin-right: 10px;  float: right;') 存檔
        a-button(style='margin-right: 10px;  float: right;') 取消
      div(style='margin-right: 10px;  float: right;')


</template>
    
<script>
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  },
  setup() {
    const value = ref('');
    return {
      value,
      activeKey: ref('2'),
    };
  },

});
</script>

<style scoped>
  .icons-list :deep(.anticon) {
    margin-right: 6px;
    font-size: 24px;
  }
</style>
<template lang="pug">

div(:span='18' style="margin:10px 20px;")   
    .card-container(type="flex" justify="center" align="left") 
      a-tabs(v-model:activekey='activeKey' type='card' style="margin-left:100;")
        a-tab-pane(key='1' tab='個人記事')
          a-textarea(v-model:value='value' placeholder='請輸入記事內容' :rows='4' :maxlength='100' size="large")
        a-tab-pane(key='2' tab='客戶記事')
          a-textarea(v-model:value='value' placeholder='請輸入記事內容' :rows='4')
        a-tab-pane(key='3' tab='公司記事')
          a-textarea(v-model:value='value' placeholder='請輸入記事內容' :rows='4')
      div(style="background-color: #E0F1FF; height: 40px;")
        a-button(type='primary' shape='circle')
          template(#icon)
            HistoryOutlined

        a-button(type="primary" style='margin-right: 10px;  float: right;') 存檔
        a-button(style='margin-right: 10px;  float: right;') 取消
      div(style='margin-right: 10px;  float: right;')


</template>
    
<script>
import { HistoryOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    HistoryOutlined
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
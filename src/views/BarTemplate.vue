<template lang="pug">
a-layout
  a-layout-header.header(:style='{ height: "45px" }')
    .logo
      a-menu(v-model:selectedkeys='selectedKeys1' theme='dark' mode='horizontal' :style='{ lineHeight: "64px",height: "45px" }')
        a-menu-item(key='1') 
         router-link(to='/customerSearch') 客戶
        a-menu-item(key='2') 
         router-link(to='/customerConsumption') 消費
        a-menu-item(key='3') 
         router-link(to='/report') 報表
      a-space(direction='vertical' class="mock")
        a-input-search(v-model:value='value' size="small" placeholder='input search text' enter-button @search='onSearch' class="mock-block")
      a-layout
        a-layout-sider(width='145' style='background: #fff'  )
          a-menu(v-model:selectedkeys='selectedKeys2' v-model:openkeys='openKeys' mode='inline' :style="{ height: '100%', borderRight: 0 }")
            a-sub-menu(key='sub1')
              template(#title)
               span
                user-outlined /
                | 會員標籤
              a-menu-item(key='1') option1
              a-menu-item(key='2') option2
              a-menu-item(key='3') option3
              a-menu-item(key='4') option4
            a-sub-menu(key='sub2')
              template(#title)
               span
                laptop-outlined /
                | 客群標籤
              a-menu-item(key='5') option5
              a-menu-item(key='6') option6
              a-menu-item(key='7') option7
              a-menu-item(key='8') option8
            a-sub-menu(key='sub3')
              template(#title)
               span
                 notification-outlined /
                 | (其它類別)
              a-menu-item(key='9') option9
              a-menu-item(key='10') option10
              a-menu-item(key='11') option11
              a-menu-item(key='12') option12
        a-layout(style='padding: 24px 4px 320px 4px')
          a-breadcrumb(style='margin: 16px 0')
        
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
      collapsed: ref(false),
      openKeys: ref(['sub1']),
    };
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
</style>


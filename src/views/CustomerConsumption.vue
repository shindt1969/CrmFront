<template lang="pug">
a-layout
    .logo
      a-menu( v-model:collapsed='collapsed' collapsible v-model:selectedkeys='selectedKeys1' theme='dark' mode='horizontal' :style='{ lineHeight: "64px",height: "45px" }')
        a-menu-item(key='1') 
         router-link(to='/customerSearch') 客戶
        a-menu-item(key='2') 
         router-link(to='/customerConsumption') 消費
        a-menu-item(key='3') 
         router-link(to='/report') 報表
      a-space(direction='vertical' class="mock")
        a-input-search(v-model:value='value' size="small" placeholder='input search text' enter-button @search='onSearch' class="mock-block")
      a-layout
        a-layout-sider(v-model:collapsed='collapsed' :trigger='null' collapsible width='145' style='background: #fff' )
          a-menu(v-model:selectedkeys='selectedKeys2' v-model:openkeys='openKeys' mode='inline' :style="{ height: '100%', borderRight: 0 }")
            a-sub-menu(key='sub1')
              template(#title)
               span
                user-outlined /
              a-menu-item(key='1') option1
              a-menu-item(key='2') option2
              a-menu-item(key='3') option3
              a-menu-item(key='4') option4
            a-sub-menu(key='sub2')
              template(#title)
               span
                user-outlined 
              a-menu-item(key='5') option5
              a-menu-item(key='6') option6
              a-menu-item(key='7') option7
              a-menu-item(key='8') option8
            a-sub-menu(key='sub3')
              template(#title)
               span
                user-outlined 
              a-menu-item(key='9') option9
              a-menu-item(key='10') option10
              a-menu-item(key='11') option11
              a-menu-item(key='12') option12
        a-layout(style='padding: 24px 4px 320px 4px')
          a-breadcrumb(style='margin: 16px 0')
    a-layout-header(style='background: #fff; padding: 0')
     menu-unfold-outlined.trigger(v-if='collapsed' @click='() => (collapsed = !collapsed)' class="changeplace")
     menu-fold-outlined.trigger(v-else @click='() => (collapsed = !collapsed)' class="changeplace")

a-button(type='primary') Primary Button
a-button Default Button
a-button(type='dashed') Dashed Button
a-button(type='text') Text Button
a-button(type='link') Link Button

</template>
<script>
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
      collapsed: ref(true),
    };
  },

});
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.changeplace{
position:absolute;
 top:85px;
 left:5px
}
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
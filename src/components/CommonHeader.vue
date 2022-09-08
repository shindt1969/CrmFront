<template lang="pug" >


a-layout-header(style='background: #fff; padding: 0')
  .r-content
   a-dropdown
        a.ant-dropdown-link(@click.prevent)
         img.user(:src='imgSrc' alt)
        template(#overlay)
            a-menu
             a-menu-item
               a(href='javascript:;') 個人中心
             a-menu-item
               a(href='javascript:;') 登出 
</template>


<script>
import { defineComponent,ref} from 'vue';
// import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    // DownOutlined,
  },
  setup(){
        const imgSrc = require("../assets/images/puffin.jpg")
        return{
            imgSrc,
        }
    }
});
</script>

<style lang="less" scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.r-content{
  .user{
    width: 50px ;
    height: 50px;
    border-radius: 50%;
  }
}
</style>






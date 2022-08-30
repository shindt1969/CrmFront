<template  lang="pug" >
a-layout(style='min-height: 100vh')
    a-layout-sider(v-model:collapsed='collapsed' collapsible)
      .logo
      a-menu(v-model:selectedkeys='selectedKeys' theme='dark' mode='inline')
        

        a-menu-item(:key='item.path' :index='item.path' v-for='item in noChildren()')
          component.icons(:is='item.icon')
          span {{item.label}}
     
        

        a-sub-menu(:index='item.label' :key='item.path' v-for='item in hasChildren()')
         template(#title)
             span
             component.icons(:is='item.icon')
             span {{item.label}}
        

         a-menu-item(:index='subItem.path' :key='subIndex' v-for='(subItem,subIndex) in item.children')
           component.icons(:is='subItem.icon')
           span {{subItem.label}}
          
    


         a-menu-item(key='9')
          file-outlined
          span File 
    
</template>









<script>
import { PieChartOutlined, UserOutlined,DesktopOutlined, HomeOutlined,FileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    UserOutlined,
    DesktopOutlined,
    HomeOutlined,
    FileOutlined,
  },
setup () {
    
      const  collapsed = ref(true)
      const  selectedKeys = ref(['/user'])
      const  list =[
          {
            path: "/home",
            name: "home",
            label:"首頁",
            icon: "HomeOutlined",
            url:  "HomeManage/HomeManage",

          },
          {
            path: "/user",
            name: "user",
            label:"用戶",
            icon: "UserOutlined",
            url:  "UserManage/UserManage",
          },
          {
            path: "/desktop",
            name: "desktop",
            label:"消費",
            icon: "DesktopOutlined",
            url:  "DeskManage/DeskManage",
          },
          {
            label: '其他',
            icon: 'PieChartOutlined',
            path: '/other',
            children:[
            {
                path:'/page1',
                name:'page1',
                label:'頁面1',
                icon: 'UserOutlined',
                url: 'Other/PageOne'
            },
            {
                path:'/page2',
                name:'page2',
                label:'頁面2',
                icon: "DesktopOutlined",
                url: 'Other/PageTwo'
            }
            ]
          }
      ]
      const noChildren = () =>{
        return list.filter((item) => !item.children);
      };
      const hasChildren = () =>{
        return list.filter((item) => item.children );
      };



       return { collapsed,selectedKeys,noChildren,hasChildren} 
  }
});
</script>
<style>
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
</style>


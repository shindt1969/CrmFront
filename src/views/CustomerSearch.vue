<template lang="pug">
BarTemplate

a-form(:model='formState' :rules="rules" name='basic' 
:label-col='{ span: 8 }' :wrapper-col='{ span: 8 }' autocomplete='off' )
    a-form-item( name='username' )
        a-input(v-model:value='formState.username'  style="width: 150px" placeholder="姓名" class="CustomerName").
    a-form-item( name='time' )
        a-input(v-model:value='formState.username'  style="width: 150px" placeholder="建立時間" class="CustomerTime").    
    a-form-item()
    a-button(type='primary' class="SearchButten") 搜尋 

a-form.ant-advanced-search-form(ref='formRef' name='advanced_search' :model='formState' @finish='onFinish')
     a-row(:gutter='2')
       template(v-for='i in 2' :key='i')
          a-col(v-show='expand || i <= 0' :span='4')
           a-form-item(:name='`field-${i}`' :label='`搜尋`' class="rowinput" :rules= [{ required: false, message: "input something" }])
            a-input(v-model:value='formState[`搜尋`]' placeholder='placeholder' style="width: 150px")
     a-row
        a-col(:span='12' style='text-align: right' class="icol" )
          a(style='font-size: 12px' @click='expand = !expand')
            template(v-if='expand')
              UpOutlined /
            template(v-else)
              DownOutlined /
              |更多搜尋

a-table(:columns='columns' :data-source='data' class="tablelist")
    template(#headercell='{ column }')
      template(v-if="column.key === 'name'")
        span
          smile-outlined /
          |Name
    template(#bodycell='{ column, record }')
     template(v-if="column.key === 'name'")
        a {{ record.name }}
     template(v-else-if="column.key === 'tags'")
        span
        a-tag( v-for="tag in record.tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'")
            | {{ tag.toUpperCase() }}
     template( v-else-if="column.key === 'action'")
        span
          a Invite 一 {{ record.name }}
          a-divider(type='vertical')
          a Delete
          a-divider(type='vertical')
          a.ant-dropdown-link
          |More actions
        down-outlined /
</template>

<script>
import { defineComponent, reactive,ref,SmileOutlined } from "vue";
import {mapActions,mapMutations,useStore} from 'vuex'
import { useRoute,useRouter } from 'vue-router'
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import { useGetters } from "../useGetters"
import BarTemplate from "./BarTemplate.vue"
// import { validateNewPassword2 } from "../validationsBack"

const columns = [{
  name: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
}, {
  title: 'Action',
  key: 'action',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];


export default defineComponent({
    components:{
      BarTemplate,
      DownOutlined,
      UpOutlined,
      SmileOutlined
         },

   setup() {
    const store = useStore();  
    const router = useRouter(); 
    const formState = reactive({
      username: '',
      emails:'',
      habit:'',
      visited:'',
      mobile:'',
      mobileage:'',
    });

    const expand = ref(false);
    const formRef = ref();

    return {formState,expand,formRef,data,columns};
  },

});
</script>

<style>

.CustomerName{
 position:absolute;
 top:10px;
 left:300px
}
.CustomerTime{
 position:absolute;
 top:-46px;
 left:480px
}
.SearchButten{
 position:absolute;
 top:88px;
 left:660px
}
#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
[data-theme='dark'] .ant-advanced-search-form {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid #434343;
  padding: 22px;
  border-radius: 2px;
}
[data-theme='dark'] #components-form-demo-advanced-search .search-result-list {
  border: 1px dashed #434343;
  background: rgba(255, 255, 255, 0.04);
}
.rowinput{
position:absolute;
 top:-130px;
 left:300px

}
.tablelist{
position:absolute;
top:200px;
left:210px;
width: 700px;
}
.icol{
position:absolute;
top:90px;
left:770px;
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

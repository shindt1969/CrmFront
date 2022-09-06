<template lang="pug">

a-row(:gutter='[40,16]')
.home
  a-col(:span='8' style="margin-top:20px")
   a-card
        div(calss='user')
        .user
            img(src='../../assets/images/puffin.jpg')
            .user-info
              p.name admin
              p.role SuperAdmin
       
        .login-info
          p
            | 上次登入時間
            span 2022-07-11
          p
            | 上次登入地點
            span 西區

  a-col(:span='16' style="margin-top:20px" height="450px")
     a-card
      a-table(:columns='columns' :data-source='data' bordered)
       template(#bodycell='{ column, text }')
         template(v-if='column.dataIndex === \'name\'')
            a {{ text }}
      
      
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup(){

    return{
      columns,
      data
    };
  }
};
</script>

<style lang="less" scoped>
.home{
  .user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img{
      width: 100px ;
      height: 100px;
      border-radius: 5%;
      margin-right: 40px;
    }
  }
}


</style>

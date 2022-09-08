<template lang="pug">

a-row(:gutter='[40,16]')

  a-col(:span='16' style="margin-top:50px")
     a-card
      Note
      a-table(:columns='columns' :data-source='data' bordered)
       template(#bodycell='{ column, text }')
         template(v-if='column.dataIndex === "name"')
            a {{ text }}
      
</template>

<script>
// @ is an alias to /src
import Note from './Note.vue'
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
    Note
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
    margin-left: 1000px;
    width: 10000;
  }
}


</style>

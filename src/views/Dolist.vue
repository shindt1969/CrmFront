<template lang="pug">    
a-table(:columns='columns' :data-source='data' bordered)
        template(#bodycell='{ column, text }')
         template(v-if='column.dataIndex === \'name\'')
            a {{ text }}

</template>


<script>
// - 把篩選的功能(包含篩選的UI)，做在這裡。 就可以依照不同的資料呈現，螞蟻篩選的範例。
import { defineComponent } from 'vue';


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

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];


export default  defineComponent( {
  name: "Home",

  setup(){

    return{
      columns,
      data
    };
  }
});
</script>


<style lang="less" scoped>

.r-content{
  .user{
    width: 50px ;
    height: 50px;
    border-radius: 50%;
  }
}

</style>

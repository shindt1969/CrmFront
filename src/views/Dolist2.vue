<template lang="pug">
div
  .table-operations
    a-button(@click="setAgeSort") Sort age
    a-button(@click="clearFilters") Clear filters
    a-button(@click="clearAll") Clear filters and sorters
  a-table(:columns="columns", :data-source="data", @change="handleChange")
</template>   

<script>
import { computed, defineComponent, ref } from 'vue';
import {mapActions,mapMutations,useStore} from 'vuex';



// var data =ref[];

export default defineComponent({
  setup() {
    const store = useStore();
    const data =ref('');
    const filteredInfo = ref();
    const sortedInfo = ref();
    const getnote =()=> store.dispatch('http/get',{
        api:"/admin/notes/1"})
    .then((data)=>{
        console.log('tt',data.value)
        if(data.status){
          this.data.value   = data.message                      
        }else{
            alert('NO-REGISTER');
        }
    });
    const columns = computed(() => {
      const filtered = filteredInfo.value || {};
      const sorted = sortedInfo.value || {};
      return [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [{
          text: 'Joe',
          value: 'Joe',
        }, {
          text: 'Jim',
          value: 'Jim',
        }],
        filteredValue: filtered.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sorted.columnKey === 'name' && sorted.order,
        ellipsis: true,
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sorted.columnKey === 'age' && sorted.order,
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [{
          text: 'London',
          value: 'London',
        }, {
          text: 'New York',
          value: 'New York',
        }],
        filteredValue: filtered.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sorted.columnKey === 'address' && sorted.order,
        ellipsis: true,
      }];
    });

    const handleChange = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      filteredInfo.value = filters;
      sortedInfo.value = sorter;
    };

    const clearFilters = () => {
      filteredInfo.value = null;
    };

    const clearAll = () => {
      filteredInfo.value = null;
      sortedInfo.value = null;
    };

    const setAgeSort = () => {
      sortedInfo.value = {
        order: 'descend',
        columnKey: 'age',
      };
    };

    return {
      data,
      columns,
      handleChange,
      clearFilters,
      clearAll,
      setAgeSort,
      getnote
    };
  },
  onMounted() {
    this.getnote()
  }
});
</script>

<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>
<template lang="pug">

a-list(item-layout='horizontal' :data-source='data')
    template(#renderItem="{ item }")
      a-list-item
        a-list-item-meta(description='Ant Design, a design language for background applications, is refined by Ant UED Team')
          template(#title)
            a(href='https://www.antdv.com/') {{ item.title }}
          template(#avatar)
            a-avatar(src='https://joeschmoe.io/api/v1/random')
</template>




<script>
import { defineComponent } from 'vue';
import {mapActions,mapMutations,useStore} from 'vuex';

const store = useStore();

const data = [{
  title: 'Ant Design Title 1',
}, {
  title: 'Ant Design Title 2',
}, {
  title: 'Ant Design Title 3',
}, {
  title: 'Ant Design Title 4',
}];


const getnote =()=> store.dispatch('http/get',{
        api:"auth/getdata"})
    .then((data)=>{
        console.log('tt',data)
        if(data.status){
          this.data   = data.message                      
        }else{
            alert('NO-REGISTER');
        }
    });

export default defineComponent({
  setup() {
    return {
      data,
      getnote
    };
  }, onMounted() {
    this.getnote()
  }

});
</script>

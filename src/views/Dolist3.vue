<template lang="pug">



a-col(:span='16' style="margin-top:50px" 
v-for='(fakedata,index) in data'   v-show='fakedata.show' :class='[fakedata.class]')   
  a-row
        a-col(:span='8')
         .r-content
           img.user(:src='imgSrc' alt)
           | col-8
  a-row
        a-col(:span='6' :offset='6')
            | {{index+1}}.{{fakedata.name}} | {{fakedata.content}}

</template>





<script>
import { defineComponent,ref,onMounted} from 'vue';
import {mapActions,mapMutations,useStore} from 'vuex';
// import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    // DownOutlined,
  },
  setup(){
        const imgSrc = require("../assets/images/puffin.jpg")
        const store = useStore();

        const data = ref([
            { name: '王美美', content: '來自台北，入住多天', show: true, class: 'red' }, 
            { name: '陳童', content: '來自紐約，只入住一天', show: true, class: 'red' },
            ]) 


        const getnote =()=>{
          console.log('tts')
          store.dispatch('http/get',{
                api:"admin/contents/1/5"})
        .then((data)=>{
                console.log('tt',data)
                if(data.status){
                  this.data   = data.message                      
                }else{
                    alert('NO-REGISTER');
                }
        })};

        onMounted(() => {
            console.log('myheader mounted');
            getnote();
          })



        
        // getnote();
        
        return{
            imgSrc,data
        };
       }



});
</script>


<style lang="less" scoped>
.r-content{
     border-bottom:2px solid #ccc;
  .user{
    width: 50px ;
    height: 50px;
    border-radius: 50%;
   
  }
}
.box{
    padding:12px;
    background-color: rgb(218, 214, 214);
    transition: height 0.4s;
    height:0px
}
.red{ 
    color:red;
}
</style>
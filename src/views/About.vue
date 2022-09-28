<template lang="pug">
a-descriptions(title='User Info' bordered)
  a-descriptions-item(label='Name') {{datas.newsdata.Cname}}
  a-descriptions-item(label='Habit') {{datas.newsdata.Habit}}
  a-descriptions-item(label='Phone') {{datas.newsdata.Phone}}
  a-descriptions-item(label='Email') {{datas.newsdata.Email}}
  a-descriptions-item(label='IDNUMBER' :span='2') {{datas.newsdata.ID}}

p {{datas.newsdata}}

button(variant='primary' @click='doLogout') Logout

</template>
<script>
import BarTemplate from "./BarTemplate.vue"
import {mapActions,mapMutations,useStore} from 'vuex'
import { useGetters } from "../useGetters"
import{reactive, onMounted} from 'vue';
import { useRoute,useRouter } from 'vue-router'
export default {
  components:{
      BarTemplate},
  setup() {
    const datas = reactive({
      newsdata:'',
    })
    const router = useRouter();
    const store = useStore();
    // const username =  useGetters('member/nameInfo');
    // const ageInfo2 = computed(() => store.getters.ageInfo)

    onMounted(() => {
         store.dispatch('http/post',{
            api:"auth/getinfro"}
            ).then((data)=>{
              if(data){
                datas.newsdata = data[0]
                // store.commit('member/doregister',data)   //actions
              }else{
                alert('check no user data');
                // router.push({ name: "Login" })
                } })
    });
    const doLogout = () =>{
        // store.dispatch('logout')
        store.commit('member/resetState')
        // router.push({ name: "Login" });
        }

    return {datas,doLogout};
  },
}
</script>

<style>

</style>
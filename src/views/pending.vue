<template lang="pug">
BarTemplate

h6(v-if="isOpen") 謝謝登入:請填單

a-form(:model='formState' :rules="rules" name='basic' 
:label-col='{ span: 8 }' :wrapper-col='{ span: 8 }' autocomplete='off' )
    a-form-item(label='Username' name='username' )
        a-input(v-model:value='formState.username').
      
    a-form-item(label='Phone' name='mobile' )
        a-input(v-model:value='formState.mobile' ).
    
    a-form-item(label='Phone2'  name='mobileage' )
        a-input(v-model:value='formState.mobileage' ).
     
    a-form-item(label='Email' name='emails' )
        a-input(v-model:value='formState.emails').

    a-form-item(label='Habit' name='habit' )
        a-input(v-model:value='formState.habit').

    a-form-item(label='Visited' name='visited' )
        a-input(v-model:value='formState.visited').


</template>

<script>
import { defineComponent, reactive } from "vue";
import {mapActions,mapMutations,useStore} from 'vuex'
import { useRoute,useRouter } from 'vue-router'
import { useGetters } from "../useGetters"
import BarTemplate from "./BarTemplate.vue"
// import { validateNewPassword2 } from "../validationsBack"


export default defineComponent({
    components:{
      BarTemplate
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

    // const setAntMobile = (formState) =>{
    // store.commit('validations/setAntMobile',22)

    // }

  let  validateNewPassword2 = (rule, value, callback,source) => {
      if ( value !=formState.mobile) {
        console.log(formState.mobile)
        return  Promise.reject("請打一樣號碼")
      } else {
        console.log(formState.mobile)
        return Promise;
      }
  };
          
    const rules = {
      emails: store.state.validations.emails,
      username: store.state.validations.username,
      phone: store.state.validations.phone,
      mobile:store.state.validations.mobile,
      habit: store.state.validations.habit,
      visited: store.state.validations.visited,
      // mobileage:store.state.validations.mobileage
      mobileage:[{required: true,message: "required"},
      {validator: validateNewPassword2,test: '123',trigger: "change"}]
    }
    
    // const geet = useGetters(
    //  {
    //  geet:  "validations/numMax" ,
    //  })

    const isOpen = useGetters(
     {
     isOpen: "Member/status"  
     })

     const isOpens = useGetters(
     {
     isOpens: "validations/ageInfo"  
     })


    return {formState,rules,...isOpen,...isOpens};
  },

});
</script>
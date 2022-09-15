<template lang="pug">

a-form(:model='formState' :rules="rules" name='basic' :label-col='{ span: 8 }' 
:wrapper-col='{ span: 8 }' 
autocomplete='off' 
)
  a-form-item(label='Username' name='username' )
    a-input(v-model:value='formState.username').
      
  a-form-item(label='Password' name='password' )
    a-input-password(v-model:value='formState.password').
      
  a-form-item(name='remember' :wrapper-col='{ offset: 8, span: 8 }')
    a-checkbox(v-model:checked='formState.remember') Remember me
  
  a-form-item(:wrapper-col='{ offset: 8, span: 8 }')
    a-button(type='primary' @click="doLogin(formState)" html-type='submit') login
  
  a-form-item(:wrapper-col='{ offset: 8, span: 8 }')
    a-button(type='primary' @click="register(formState)" html-type='button') 註冊
</template>

<script>
import { defineComponent, reactive } from "vue";
import {mapActions,mapMutations,useStore} from 'vuex'
import { useRoute,useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
    });

    const rules = {
      username: store.state.validations.username,
      password: store.state.validations.password
    }
    const register =(user) =>{
      if(user.account != "" && user.password != "") {
        //  store.dispatch('register',user) console.log("123") console.log(store.state.Member.douserlist[0])
          store.dispatch('http/post',{
            api:"auth/register",
            json:user})
            .then((data)=>{
               console.log('tt',data)
              if(data){
                store.commit('Member/doregister',data)                    //actions
              }else{
                alert('NO-REGISTER');
                } })
            // router.push({ name: "VUEXTEST" });
      }else{
          alert('Please fill the text!(register)');
      }}
      
    const doLogin =(formState) =>{
   
         store.dispatch('http/post',{
          api:"auth/login",
          json:formState})
            .then((data)=>{
             console.log('logindata',data.token)
             if(data){
             store.commit('Member/loginRequest',data)
             store.commit('Member/loginSuccess')
             router.push({ name: "Pending" })                    //actions
             }else{
              alert('請先加入會員');
               } })
                }
    const onFinish = values => {
      const getlist = store.state.Member.age
      console.log('getlist', getlist)
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return {formState,rules,onFinish,onFinishFailed,doLogin,register};
  },

});
</script>
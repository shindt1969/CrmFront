<template lang="pug">
a-form(:model='formState' :rules="rules" name='basic' :label-col='{ span: 8 }' 
:wrapper-col='{ span: 8 }' 
autocomplete='off' 
)
    a-form-item(label='Username' name='email')
        a-input(v-model:value='formState.email').

    a-form-item(label='Password' name='password' )
        a-input-password(v-model:value='formState.password').

    a-form-item(name='remember' :wrapper-col='{ offset: 8, span: 8 }')
        a-checkbox(v-model:checked='remember') Remember me

    a-form-item(:wrapper-col='{ offset: 8, span: 8 }')
        a-button(type='primary' @click="doLogin(formState)" html-type='submit') login

    //- a-form-item(:wrapper-col='{ offset: 8, span: 8 }')
    //-     a-button(type='primary' @click="register(formState)" html-type='button') 註冊
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { mapActions, mapMutations, useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const store = useStore();
        const router = useRouter();
        const remember = ref(true);
        const formState = reactive({
            email: '',
            password: '',
        });

        const rules = {
            email: store.state.validations.emails, // email: 對應到 name="email"
            password: store.state.validations.password
        }
        
        const doLogin = (formState) => {
            store.dispatch('http/post', {
                api: "api/admin/login",
                json: formState
            })
                .then((data) => {
                    if (Object.prototype.hasOwnProperty.call(data, "status")) {
                        if (data.status){
                            store.commit('member/loginRequest', data)
                            router.push({ name: "Home" })  // actions
                        }else if (data.error==='5'){
                            alert('帳號或密碼錯誤');
                        }
                    } else {
                        console.log('login fail: ', data)
                        alert('發生某種錯誤');
                    }
                })
        }
        const onFinish = values => {
            const getlist = store.state.member.age

        };

        const onFinishFailed = errorInfo => {
        };

        //       const register = (user) => {
        //     if (user.account != "" && user.password != "") {
        //         store.dispatch('http/post', {
        //             api: "api/admin/login",
        //             json: user
        //         })
        //             .then((data) => {
        //                 if (data) {
        //                     store.commit('member/doregister', data)  //actions
        //                 } else {
        //                     alert('NO-REGISTER');
        //                 }
        //             })
        //     } else {
        //         alert('Please fill the text!(register)');
        //     }
        // }

        return { formState, rules, onFinish, onFinishFailed, doLogin, remember };
    },

});
</script>
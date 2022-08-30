export default {
    namespaced: true,
      state: { 
          user:{
               password:"",
               token:null,
               isLogin: false,
               account:null,
               counter2: 1250,
             },
                douserlist:[{account:"",password:""}],
                setAntMobile:"",
           },
      mutations: {
            resetState (state) {
              state.user.isLogin=false;
              state.user.token=null;
              state.douserlist=null;
              state.user.account=null;
            }, 
            loginRequest(state,payLoad){   //回覆更改state
              state.user.isLogin=true;
              state.user.token=payLoad.token;
              state.user.account=payLoad.account;
              console.log('qqqq',state.user.token,state.user.isLogin,'登入成功',payLoad)
            },
            doregister(state,payLoad){
              state.douserlist = {...state.douserlist,payLoad}
               console.log("state.douserlist",state.douserlist)
            },
            loginSuccess(state) {      //登入成功後再做...
              state.user.isLogin=true;
              // state.user.token=null;
              // state.user.account=null;
              // console.log(state.user.account)
            },
            setAntMobile(state,formState){
              state.setAntMobile = formState
            },

           },
      actions: {
            register({commit},payLoad){
              setTimeout( () =>{
              commit('doregister',payLoad)
            //  console.log(payLoad)
            },10000)
         },
            login({commit},payLoad){
             commit('loginRequest',payLoad)
             let result = true
             if (result){
             console.log('loginSuccess')
            }else {
            console.log('noright')}
          },
          logout({commit}) {
            commit('resetState');
            console.log('登出')
            // router.push('/');
           },
           },
      getters: { 
            status(state) {
                return  state.user.isLogin
            },
            nameInfo(state) {
              return state.user.account
           }
           }
        } 
  
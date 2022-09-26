export default {
    namespaced: true,
    state: {
        user: {
            token: null,
            isLogin: false,
            id: null,
            account: null,
        },
        setAntMobile: ""
    },
    mutations: {
        resetState(state) {
            state.user.isLogin = false;
            state.user.token = null;
            state.douserlist = null;
            state.user.account = null;
        },
        loginRequest(state, payLoad) {   //回覆更改state
            state.user.isLogin = true;
            state.user.token = payLoad.body._token;
            state.user.account = payLoad.body.account;
            state.user.id = payLoad.body.id;
        },
        doregister(state, payLoad) {
            state.douserlist = { ...state.douserlist, payLoad }
        },
        loginSuccess(state) {      //登入成功後再做...
            state.user.isLogin = true;
            // state.user.token=null;
            // state.user.account=null;
            // console.log(state.user.account)
        },
        setAntMobile(state, formState) {
            state.setAntMobile = formState
        },

    },
    actions: {
        register({ commit }, payLoad) {
            setTimeout(() => {
                commit('doregister', payLoad)
                //  console.log(payLoad)
            }, 10000)
        },
        login({ commit }, payLoad) {
            commit('loginRequest', payLoad)
            let result = true
            if (result) {
                commit('loginSuccess', payLoad)
                
            } 
        },
        logout({ commit }) {
            commit('resetState');
            // router.push('/');
        },
    },
    getters: {
        status(state) {
            return state.user.isLogin
        },
        nameInfo(state) {
            return state.user.account
        }
    }
}

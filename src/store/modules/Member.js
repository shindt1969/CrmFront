import axios from 'axios'
import router from '@/router'

export default {
    namespaced: true,
    state: {
        user: {
            token: null,
            id: null,
            account: null,
        },
        setAntMobile: ""
    },
    mutations: {
        resetState(state) {
            console.log("im calling reset!!");
            state.user.token = null;
            state.user.account = null;
            state.user.id = null;
        },
        loginRequest(state, payLoad) {   //回覆更改state
            state.user.token = payLoad.body._token;
            // axios.defaults.headers.common['Authorization'] = `Bearer ${payLoad.body._token}`;
            state.user.account = payLoad.body.account;
            state.user.id = payLoad.body.id;
        },
        doregister(state, payLoad) {
            state.douserlist = { ...state.douserlist, payLoad }
        },
        loginSuccess(state) {      //登入成功後再做...
            // state.user.token=null;
            // state.user.account=null;
        },
        setAntMobile(state, formState) {
            state.setAntMobile = formState
        },
        initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
                state.user = JSON.parse(localStorage.getItem('store'));
			}
		}
    },
    actions: {
        register({ commit }, payLoad) {
            setTimeout(() => {
                commit('doregister', payLoad)
            }, 10000)
        },
        login({ commit }, payLoad) {
            commit('loginRequest', payLoad)
            commit('loginSuccess', payLoad)

        },
        logout({ commit }) {
            commit('resetState');
            router.push('/');
        },
        isLogin({ dispatch, commit, state }) {
            return new Promise((resolve, reject) => {
                dispatch("http/get", { api: `/api/admin/verifyToken` }, { root: true }).then((data) => {
                    if (data.status) {
                        resolve(true);
                    } else {
                        commit('resetState');
                        resolve(false);
                    }
                });
            });
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

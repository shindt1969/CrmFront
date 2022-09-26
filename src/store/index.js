import { createStore } from "vuex";
// import validation from "./validation"
import http from './modules/http'
import Member from "./modules/Member";
import validations from "./modules/validations";
import createPersistedState from "vuex-persistedstate"

export default createStore({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [createPersistedState({ key: 'keepper', paths: ['Member.user', 'Member.douserlist'] })],


    modules: {
        http: http,
        Member: Member,
        validations: validations
    },
    state: {
        age: 17,
    },
    getters: {

        ageInfo(state) {
            return state.age
        }
    },
    mutations: {
    },
    actions: {},
});

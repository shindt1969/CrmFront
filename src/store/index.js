import { createStore } from "vuex";
// import validation from "./validation"
import http from './modules/http'
import member from "./modules/member";
import validations from "./modules/validations";
import createPersistedState from "vuex-persistedstate"

export default createStore({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [createPersistedState({ key: 'keepper', paths: ['member.user', 'member.douserlist'] })],


    modules: {
        http: http,
        member: member,
        validations: validations
    },
    state: {

    },
    getters: {

    },
    mutations: {
    },
    actions: {

    },
});

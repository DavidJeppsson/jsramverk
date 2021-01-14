import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: "",
        user: "",
    },
    mutations: {

    },
    actions: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        }

    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getUser(state) {
            return state.user;
        }
    }
})
// const store = new Vuex.Store({
//     state: {
//         token: "",
//     }
// })

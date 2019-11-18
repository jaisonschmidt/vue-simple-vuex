import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: window.localStorage
})

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        incrementCounter(state, payload) {
          state.count += payload
        }
    },
    actions: {
        incrementAction (context, payload) {
            context.commit('incrementCounter', payload)
        }
    },
    getters: {
        counter (state) {
            return state.count
        }
    },
    plugins: [vuexPersist.plugin]
})


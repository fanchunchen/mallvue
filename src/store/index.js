import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const state = { cartList: [] }

const store = new Vuex.Store({

    state,
    getters,
    mutations: {
        addCart(state, payload) {
            let oldProduct = state.cartList.find(
                function (item) { return item.iid === payload.iid })
            if (oldProduct) { oldProduct.count += 1 }
            else {
                payload.count = 1;
                payload.checked=true;
                state.cartList.push(payload)
            }

        }


    }



})


export default store
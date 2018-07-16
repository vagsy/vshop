import Vue from 'vue'

const state = {
    orderList: [],
    params: {}
}

const getters = {
    getOrderList: state => state.orderList
}

const actions = {
    fetchOrderList ({commit, state}) {
        Vue.http.post('/api/getOrderList', state.params)
        .then((res) => {
          let data = res.data
          if (data.errno === 0) {
            commit('updateOrderList', data.data.list)
          }
        }, (err) => {

        })
    }
}

const mutations = {
    updateOrderList (state, payload) {
      state.orderList = payload
    },
    updateParams (state, {key, val}) {
      state.params[payload.key] = val
      console.log(state.params)
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}

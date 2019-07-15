import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:'',
      router:''
  },
  mutations: {
      update_router(state,data){
          state.router = data
      }
  },
  actions: {

  }
})

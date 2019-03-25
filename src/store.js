import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';
import { match } from 'minimatch';

let footballapi = axios.create({
  baseURL: "http://api.football-data.org/v2/competitions/"
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    match: {}

  },
  mutations: {
    setMatch(state, match) {
      state.match = match
    }

  },
  actions: {
    getMatch({ commit }, matchId) {
      footballapi.get('/' + matchId)
        .then(res => {
          commit('setMatch', res.data)
        })
        .catch(err => console.error(err.message))
    }
  }
})

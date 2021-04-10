import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);
const BROWSER_BASE_URL = 'https://api.jsdelivr.com/v1'

export default new Vuex.Store({
  state: {
    searchResp: [],
    searchRespPackDesc: [],
  },

  getters: {
    searchResp: (state) => state.searchResp,
    searchRespPackDesc: (state) => state.searchRespPackDesc
  },

  actions: {
    searchSignUp({commit}, searchName) {
      if (!searchName) {
        commit('SET_SEARCHRESPONSE', this.state.searchResp = '');
      } else {
        axios.get(`${BROWSER_BASE_URL}/jsdelivr/libraries?name=${searchName}*&lastversion=*`)
            .then(response => {
              commit('SET_SEARCHRESPONSE', response.data);
            });
      }
    },
    fetchPackDesc({ commit }, pack ){
      console.log(pack.packName)
      console.log(pack.packVersion)
        axios.get(`${BROWSER_BASE_URL}/jsdelivr/libraries?name=${pack.packName}&lastversion=${pack.packVersion}`).then(response => {
          commit('SET_SEARCHDESCRIPTION', response.data);
        });
    }
  },

  mutations: {
    SET_SEARCHRESPONSE(state, searchResp) {
      state.searchResp = searchResp;
    },
    SET_SEARCHDESCRIPTION(state, searchRespPackDesc) {
      state.searchRespPackDesc = searchRespPackDesc;
    },
  }
})

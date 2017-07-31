import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symbolList: [],
    answerList: [],
  },
  mutations: {
    GET_SYMBOL_LIST(state, symbolList) {
      state.symbolList = symbolList
    },
    ADD_ANSWER_ITEM(state, answerItem) {
      state.answerList.push(answerItem)
    },
    CLEAR_STORE(state) {
      state.symbolList = []
      state.answerList = []
    }
  },

  actions: {
    getSymbolList({ commit }, symbolList) {
      commit('GET_SYMBOL_LIST', symbolList)
    },
    addAnswerItem({ commit }, answerItem) {
      commit('ADD_ANSWER_ITEM', answerItem)
    },
    clearStore({ commit }) {
      commit('CLEAR_STORE')
    }
  },

  getters: {
    symbolList: state => state.symbolList,
    answerList: state => state.answerList
  }
})

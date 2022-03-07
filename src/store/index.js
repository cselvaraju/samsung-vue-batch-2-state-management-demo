import { createStore } from 'vuex'

export default createStore({
  state: {
    currentCount: 555,
    countHistory: []
  },
  getters: {
    squaredCount(state) {
      return state.currentCount * state.currentCount;
    }
  },
  mutations: {
    increment(state) {
      state.currentCount = state.currentCount + 1;
      state.countHistory.push(state.currentCount);
    },
    decrement(state) {
      state.currentCount = state.currentCount - 1;
      state.countHistory.push(state.currentCount);
    },
    incrementBy(state, payload) {
      state.currentCount = state.currentCount + payload;
      state.countHistory.push(state.currentCount);
    }
  },
  actions: {
    incrementBy(context, payload) {
      setTimeout(() => {
        context.commit('incrementBy', payload)
      }, 2000);
    }
  },
  modules: {
  }
})

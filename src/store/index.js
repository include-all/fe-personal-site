import { createStore } from 'vuex'

export default createStore({
  modules: {
    home: {
      state: {
        theme: 'dark',
      },
      mutations: {
        setTheme(state, payload) {
          state.theme = payload
        }
      },
      actions: {
      },
      modules: {
      }
    }
  }
})

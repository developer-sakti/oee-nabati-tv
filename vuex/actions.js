import types from './mutation-types'

export default {
  nuxtClientInit({ commit }) {
    const tv = JSON.parse(localStorage.getItem('tv'))
    commit(types.SET_TV_STATE, tv)
    console.log('exce', tv)
  },
  setTV({ commit }, payload) {
    commit(types.SET_TV_STATE, payload)
    localStorage.setItem('tv', JSON.stringify(payload))
  }
}

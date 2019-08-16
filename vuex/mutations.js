import types from './mutation-types'

export default {
  [types.SET_TV_STATE]: (state, payload) => {
    state.tv = payload
  }
}

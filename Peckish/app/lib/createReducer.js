// creates a reducer function
// looks similar to a decorator
// below taken from https://raw.githubusercontent.com/jlebensold/peckish/master/app/lib/createReducer.js


export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

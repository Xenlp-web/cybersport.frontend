const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
};

export const addTokenReducer = createReducer(null, {
  ['ADD_TOKEN']: (state, action) => {
    return {token: action.token}
  }
});

// const app = (state = initialState) => {
//   return state
// };

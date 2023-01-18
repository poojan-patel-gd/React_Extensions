import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  url: '',
}

const actionsMap = {
  [ActionTypes.GET_URL](state/*, action*/) {
    return state.url;
  },
  [ActionTypes.SET_URL](state, action) {
    return state.url = action.url
  }
};

export default function urls(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}

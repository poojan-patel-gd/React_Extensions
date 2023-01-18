import * as types from '../constants/ActionTypes';

export function getUrl() {
  return { type: types.GET_URL };
}

export function setUrl(url) {
  return { type: types.SET_URL, url };
}

import { combineReducers } from 'redux';
import todos from './todos';
import urls from "./urls";

export default combineReducers({
  todos,
  urls
});

import { combineReducers } from 'redux';
import loginReducer from 'app/login/store/reducer';

const defaultState = {};
export default combineReducers({ loginReducer });

const defaultState = {};
import { SET_USERINFO } from './actionType';

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_USERINFO:
      const { isLogin, userInfo } = action;
      return {
        isLogin,
        userInfo
      };
    default:
      return state;
  }
}

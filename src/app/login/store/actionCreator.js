import { SET_USERINFO } from './actionType';

const setUserInfo = (isLogin, userInfo) => ({
  type: SET_USERINFO,
  isLogin,
  userInfo
});

/**
 * @Author: wangkai
 * @Date: 2018/9/25
 * @Last Modified by: wangkai
 * @Desc: http相关工具函数
 **/

import { message } from 'antd'
import instance from './axiosConfig'

/**
 * 提前定义接口路径，请求方法
 * @param url {String} 请求地址
 * @param method {String} 请求方式
 * @returns {Function} 返回调用接口函数
 */
export const ajaxFunc = (url, method = 'post') => {
  const errorFunc = err => {
    // console.log('请求成功-失败', err)
    err.msg && message.warning(err.msg)
  }
  /**
   * 发起get或post请求
   * @param params {Object} 请求参数
   * @param success {Function} 成功回调
   * @param error {Function} 失败回调
   */
  return (params, success, error = errorFunc) => {
    let value
    method === 'post' ? value = params : value = {params}
    instance[method](url, value)
      .then(
        res => success(res),
        err => error(err)
      )
  }
}
/**
 * 判断本地存储中的token是否存在，从而在请求头中携带
 * @returns {string} [返回localStorage中的token,或者返回'']
 */
export const getToken = () => {
  var userInfo = localStorage.getItem('user') || ''
  let token
  if (userInfo) {
    token = JSON.parse(userInfo).user_token
  }
  return token ? token : ''
}
/**
 * 对错误code进行统一处理：
 * @param code {Number} 后端返回的code
 */
export const handleErrorCode = (code) => {
  switch (code) {
    case 10000:
      break
    case 10001:
      break
    case 10002:
      break
  }
}
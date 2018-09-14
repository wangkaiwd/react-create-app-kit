/**
 * @Author: wangkai
 * @Date: 2018/9/13
 * @Last Modified by: wangkai
 * @Desc: 公用的ajax方法封装
 **/
import axios from 'axios'
import qs from 'qs'

import httpServer from '@/http/serverConfig'
import { message } from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

let pending = [] //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let timerId = null
let cancelToken = axios.CancelToken

// 频繁请求时只会执行最新的请求（如：表单的input事件，以及列表搜索）
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) { //当前请求在数组中存在时执行函数体
      pending[p].f('请求过于频繁！') //执行取消操作
      pending.splice(p, 1) //把这条记录从数组中移除
    }
  }
  timerId && clearTimeout(timerId)
  timerId = setTimeout(() => {
    pending = []
  }, 200)
}
/**
 * 判断本地存储中的token是否存在，从而在请求头中携带
 * @returns {string} [返回localStorage中的token,或者返回'']
 */
const getToken = () => {
  var userInfo = localStorage.getItem('user') || ''
  let token
  if (userInfo) {
    token = JSON.parse(userInfo).user_token
  }
  return token ? token : ''
}

const instance = axios.create({
  baseURL: httpServer.mockURL,
  timeout: 20000,
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截
instance.interceptors.request.use((config) => {
  // console.log('请求成功', config)
  NProgress.start()
  const {method, data} = config
  removePending(config)
  config.cancelToken = new cancelToken((c) => {
    // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
    pending.push({u: config.url + '&' + config.method, f: c})
  })
  if (method === 'post') {
    config.data = qs.stringify(data)
  }
  const token = getToken()
  token && (config.headers['user_token'] = token)
  return config
}, (error) => {
  return Promise.reject(error)
})
//
// 响应拦截
instance.interceptors.response.use((response) => {
  // console.log('响应成功', response)
  // Do something with response data
  if (response.status === 200) {
    NProgress.done()
    // if (response.data.code === 0) {
    //   return response.data
    // }
    // if (response.data.code !== 0) {
    //   return Promise.reject(response.data)
    // }
    return response.data
  } else {
    return Promise.reject(response)
  }
}, function (error) {
  // Toast('响应失败了，请刷新页面重试！！');
  // console.error('响应失败', error);
  // 这里可以用来处理断网情况，包括超时和请求路径失败等
  return Promise.reject(error)
})

/**
 * 提前定义接口路径，请求方法和是否需要短提示
 * @param url {String} 请求地址
 * @param method {String} 请求方式
 * @returns {Function} 返回调用接口函数
 */
const ajaxFunc = (url, method = 'post') => {
  const errorFunc = err => {
    // console.log('请求成功-失败', err)
    err.msg && message(err.msg)
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
    // value.cancelToken = source.token
    instance[method](url, value)
      .then(
        res => success(res),
        err => error(err)
      )
  }

}

/**
 * 对错误code进行统一处理：
 * @param code {Number} 后端返回的code
 */
const handleErrorCode = (code) => {
  switch (code) {
    case 10000:
      break
    case 10001:
      break
    case 10002:
      break
  }
}
export default ajaxFunc
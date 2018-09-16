/**
 * @Author: wangkai
 * @Date: 2018/9/13
 * @Last Modified by: wangkai
 * @Desc: 公用的ajax方法封装
 **/
import axios from 'axios'
import qs from 'qs'

import httpServer from '@/http/serverConfig'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './tool'

let pending = [] //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let timerId = null
let cancelToken = axios.CancelToken

/**
 * 频繁请求时只会执行最新的请求（如：表单的input事件，以及列表搜索）
 * @param config {Object} axios请求相关配置项
 */
const removePending = (config) => {
  for (let i = pending.length - 1; i >= 0; i--) {
    if (pending[p].u === config.url + '&' + config.method) { //当前请求在数组中存在时执行函数体
      pending[p].f() //执行取消操作
      pending.splice(p, 1) //把这条记录从数组中移除
    }
  }
  timerId && clearTimeout(timerId)
  timerId = setTimeout(() => {
    pending = []
  }, 200)
}

const instance = axios.create({
  baseURL: httpServer.mockURL,
  timeout: 20000,
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
instance.interceptors.request.use((config) => {
  const {method, data} = config
  removePending(config)
  NProgress.start()
  config.cancelToken = new cancelToken((c) => {
    // ajax标识用请求地址&请求方式拼接的字符串
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
instance.interceptors.response.use((response) => {
  NProgress.done()
  removePending(response)
  if (response.status === 200) {
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
  return Promise.reject(error)
})
export default instance

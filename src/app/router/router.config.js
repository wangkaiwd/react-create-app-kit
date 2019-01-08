import { lazy } from 'react'
const lazyComponent = path => lazy(() => import(`pages/${path}`))
const routeConfig = [
  {
    component: lazyComponent('home'),
    path: '/admin/home',
    name: '首页'
  },
  {
    component: lazyComponent('form'),
    path: '/admin/form/advanced/demo',
    name: '表单1'
  },
  {
    component: lazyComponent('list'),
    path: '/admin/list/query',
    name: '列表查询'
  },
  {
    component: lazyComponent('detail'),
    path: '/admin/detail/base',
    name: '基础详情页',
  }
]
export default routeConfig
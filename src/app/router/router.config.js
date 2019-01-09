import { lazy } from 'react'
const lazyComponent = path => lazy(() => import(`pages/${path}`))
// 如果出现三级路由的话，可能会有问题
const routeConfig = [
  {
    component: lazyComponent('home'),
    path: '/admin/home/analysis',
  },
  {
    component: lazyComponent('form'),
    path: '/admin/form/advanced/demo',
    breadNames: ['高级表单', '表单demo']
  },
  {
    component: lazyComponent('list'),
    path: '/admin/list/query',
    breadNames: ['列表页', '查询列表']
  },
  {
    component: lazyComponent('detail'),
    path: '/admin/detail/base',
    breadNames: ['详情页', '基础详情页'],
  }
]
export default routeConfig
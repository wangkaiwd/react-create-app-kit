import { lazy } from 'react'
const lazyComponent = path => lazy(() => import(`pages/${path}`))
// 如果出现三级路由的话，可能会有问题
const routeConfig = [
  {
    component: lazyComponent('home'),
    path: '/home/analysis',
  },
  {
    component: lazyComponent('Css'),
    path: '/css/demo01',
    breadNames: ['CSS-Skill', 'demo01']
  },
  {
    component: lazyComponent('list'),
    path: '/list/query',
    breadNames: ['列表页', '查询列表']
  },
  {
    component: lazyComponent('detail'),
    path: '/detail/base',
    breadNames: ['详情页', '基础详情页'],
  }
]
export default routeConfig
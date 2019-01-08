const menuData = [
  {
    identify: 'home',
    icon: 'dashboard',
    key: '/admin/home',
    title: '首页'
  },
  {
    identify: 'form',
    icon: 'pie-chart',
    key: '/admin/form',
    title: '表单页',
    children: [
      {
        identify: 'form',
        key: '/admin/form/advanced',
        title: '高级表单',
        children: [
          {
            identify: 'form',
            key: '/admin/form/advanced/demo',
            title: '表单demo'
          }
        ]
      }
    ]
  },
  {
    identify: 'list',
    icon: 'desktop',
    key: '/admin/list',
    title: '列表页',
    children: [
      {
        identify: 'list',
        key: '/admin/list/query',
        title: '查询列表',
      }
    ]
  },
  {
    identify: 'detail',
    icon: 'inbox',
    key: '/admin/detail',
    title: '详情页',
    children: [
      {
        identify: 'detail',
        key: '/admin/detail/base',
        title: '基础详情页',
      }
    ]
  }
]

export default menuData
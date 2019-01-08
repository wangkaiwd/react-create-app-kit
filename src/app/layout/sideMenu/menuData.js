const menuData = [
  {
    icon: 'dashboard',
    key: '/admin/home',
    title: '首页'
  },
  {
    icon: 'pie-chart',
    key: '/admin/form',
    title: '表单页',
    children: [
      {
        key: '/admin/form/advanced',
        title: '高级表单',
        children: [
          {
            key: '/admin/form/advanced/demo',
            title: '表单demo'
          }
        ]
      }
    ]
  },
  {
    icon: 'desktop',
    key: '/admin/list',
    title: '列表页',
    children: [
      {
        key: '/admin/list/query',
        title: '查询列表',
      }
    ]
  },
  {
    icon: 'inbox',
    key: '/admin/detail',
    title: '详情页',
    children: [
      {
        key: '/admin/detail/base',
        title: '基础详情页',
      }
    ]
  }
]

export default menuData
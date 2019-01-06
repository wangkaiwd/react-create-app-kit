const menuData = [
  {
    icon: 'dashboard',
    key: '/home',
    title: '首页'
  },
  {
    icon: 'pie-chart',
    key: '/form',
    title: '表单页',
    children: [
      {
        key: '/form/advanced',
        title: '高级表单',
        children: [
          {
            key: '/form/advanced/demo',
            title: '表单demo'
          }
        ]
      }
    ]
  },
  {
    icon: 'desktop',
    key: '/list',
    title: '列表页',
    children: [
      {
        key: '/list/query',
        title: '查询列表',
      }
    ]
  },
  {
    icon: 'inbox',
    key: '/detail',
    title: '详情页',
    children: [
      {
        key: '/detail/base',
        title: '基础详情页',
      }
    ]
  }
]

export default menuData
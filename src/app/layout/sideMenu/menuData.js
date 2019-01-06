const menuData = [
  {
    icon: 'pie-chart',
    key: '/pie-chart',
    title: '表单页',
    children: [
      {
        key: '/advanced',
        title: '高级表单',
        children: [
          {
            key: '/1',
            title: '表单1'
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
        key: '/query',
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
        key: '/base',
        title: '基础详情页',
      }
    ]
  }
]

export default menuData
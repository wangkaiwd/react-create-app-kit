const menuData = [
  {
    icon: 'dashboard',
    key: '/home',
    title: 'Dashboard',
    children: [
      {
        key: '/home/analysis',
        title: '分析页'
      }
    ]
  },
  {
    icon: 'eye',
    key: '/css',
    title: 'CSS-Skill',
    children: [
      {
        key: '/css/demo01',
        title: 'demo01',
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
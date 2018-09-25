// 左侧边栏配置,之后还有子菜单对应数组为children,没有的话对应数组为options

const leftMenuList = [
  {
    key: '/home/test', title: '测试1', icon: 'form',
    children: [
      { key: '/home/test/example', title: '测试1-1', icon: 'clock-circle' }
    ],
  },
  {
    key: '/home/salesOrder', title: '商城销售订单', icon: 'copy',
    children: [
      {
        key: '/home/salesOrder/transactionOrder', title: '交易订单',
        children: [
          { key: '/home/salesOrder/transactionOrder/agentEnd', title: '代理端', },
          { key: '/home/salesOrder/transactionOrder/memberEnd', title: '会员端', }
        ],
      },
      {
        key: '/home/salesOrder/refundOrder', title: '退款订单',
        children: [
          { key: '/home/salesOrder/refundOrder/agentEnd', title: '代理端', },
          { key: '/home/salesOrder/refundOrder/memberEnd', title: '会员端', }
        ],
      },
      {
        key: '/home/salesOrder/orderSettings', title: '订单设置'
      }
    ]
  },
]

export default leftMenuList

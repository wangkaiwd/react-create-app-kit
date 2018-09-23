// 左侧边栏配置,之后还有子菜单对应数组为children,没有的话对应数组为options

const leftMenuList = [
  {
    key: '/home/test', text: '测试1', icon: 'form',
    options: [
      { key: '/home/test/example', text: '测试1-1', icon: 'clock-circle' }
    ],
  },
  {
    key: '/home/salesOrder', text: '商城销售订单', icon: 'copy',
    children: [
      {
        key: '/home/salesOrder/transactionOrder', text: '交易订单',
        options: [
          { key: '/home/salesOrder/transactionOrder/agentEnd', text: '代理端', },
          { key: '/home/salesOrder/transactionOrder/memberEnd', text: '会员端', }
        ],
      },
      {
        key: '/home/salesOrder/refundOrder', text: '退款订单',
        options: [
          { key: '/home/salesOrder/refundOrder/agentEnd', text: '代理端', },
          { key: '/home/salesOrder/refundOrder/memberEnd', text: '会员端', }
        ],
      },
      {
        key: '/home/salesOrder/orderSettings', text: '订单设置'
      }
    ]
  },
]

export default leftMenuList

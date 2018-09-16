// 左侧边栏配置
import About from '@/pages/about/About'
import Inbox from '@/pages/inbox/Inbox'
import Example from '@/pages/example'

const leftMenuList = [
  {
    key: '/home/test', text: '测试1', icon: 'form',
    options: [
      {key: '/home/test/example', text: '测试1-1', icon: 'clock-circle', component: Example}
    ],
  },
  {key: '/home/about', text: '关于', icon: 'copy', component: About},
  {key: '/home/inbox', text: '信箱', icon: 'diff', component: Inbox},
]

export default leftMenuList
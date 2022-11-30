import CommandList from '@/views/command/CommandList.vue'
import CommandDetail from '@/views/command/CommandDetail.vue'

export default [
    {
        path: '/',
        name: 'commands',
        component: CommandList
      },
      {
          path: '/command/:id',
          name: 'command',
          component: CommandDetail,
          props: true
        }
]

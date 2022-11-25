import { createRouter, createWebHistory } from 'vue-router'
import CommandList from '@/views/CommandList.vue'
import CommandDetail from '@/views/CommandDetail.vue'

const routes = [{
  path: '/',
  name: 'commands',
  component: CommandList
},
{
    path: '/command/:id',
    name: 'command',
    component: CommandDetail,
    props: true
  }]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
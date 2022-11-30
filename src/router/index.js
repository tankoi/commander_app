import { createRouter, createWebHistory } from 'vue-router'
import commandRoutes from './commands'
import userRoutes from './users'

const routes = commandRoutes
  .concat(userRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    name:'Math',
    component:()=>import('../views/Maths/Math10.vue')
  },
  {
    path:'/math20',
    name: 'Math20',
    component: ()=>import('../views/Maths/Math20.vue')
  },
  {
    path:'/multi',
    name:'Multi',
    component:()=>import('../views/Maths/MathMulti.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/404.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

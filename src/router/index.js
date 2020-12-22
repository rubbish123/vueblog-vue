import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogEdit from "@/views/BlogEdit";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/blogs'
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },

  {
    path: '/blog/add',
    name: 'BlogDetail',
    component: () => import('../views/BlogDetail')
  },
  {
    path: '/blog/:blogId',
    name: 'BlogEdit',
    component: () => import('../views/BlogEdit')
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: ()=>import('../views/BlogEdit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

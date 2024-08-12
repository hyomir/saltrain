import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Header from '@/components/Header.vue'
import Header_white from '@/components/Header_white.vue'
import Footer from '@/components/Footer.vue'
import Products from '@/components/Products.vue'
import Store from '@/components/Store.vue'
import Collection from '@/components/Collection.vue'
import Collection_read from '@/components/Collection_read.vue'
import About from '@/components/About.vue'
import Community from '@/components/Community.vue'
import Notice from '@/components/Notice.vue'
import Login from '@/components/Login.vue'
import Detail from '@/components/Detail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/header_white',
      name: 'header_white',
      component: Header_white
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/collection_read',
      name: 'collection_read',
      component: Collection_read
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    
  ]
})

export default router
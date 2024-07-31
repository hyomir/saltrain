import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Products from '@/components/Products.vue'
import Store from '@/components/Store.vue'
import Collection from '@/components/Collection.vue'
import About from '@/components/About.vue'
import Community from '@/components/Community.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },

  ]
})

export default router

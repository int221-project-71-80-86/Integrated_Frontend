import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../components/Products.vue'
import Addproducts from '../components/Addproducts.vue'
import showProducts from '../components/showProducts.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/AddProducts',
    name: 'addProducts',
    component: Addproducts
  },
  {
    path: '/test',
    name: 'showProducts',
    component: showProducts
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Home
  }
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

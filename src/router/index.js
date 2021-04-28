import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../components/Products.vue'
import Addproducts from '../components/Addproducts.vue'
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
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

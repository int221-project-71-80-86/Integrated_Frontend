import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import navbar from '@/components/navbar.vue'
const app = createApp(App)
app.component('nav-bar',navbar)
app.use(router).mount('#app')

import './assets/main.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Optional: For Bootstrap JavaScript components

axios.defaults.baseURL = 'http://127.0.0.1:8001/' // Change this to your backend URL

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

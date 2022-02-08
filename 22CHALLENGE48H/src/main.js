import { createApp } from 'vue'
import App from './App.vue'
import router from './api/router.js';

createApp(App).mount('#app')
.use(router)
.mount('#app')
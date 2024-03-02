import { createApp } from 'vue' //引入vue系统文件
import App from './App.vue' //引入app组件
import router from './router'

import {createPinia} from 'pinia'
//mount('#app') -->public/index.html
createApp(App).use(createPinia()).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' 
import store from './store'  
import 'vant/lib/index.css'; // 全局引入Vant样式
import './utils/rem' // rem适配
import 'reset-css'  //初始化样式
import vant from 'vant'


createApp(App).use(router).use(store).use(vant).mount('#app')

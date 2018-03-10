import Vue from 'vue'
import App from './App.vue'

//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'

//Vue.use(MintUI);

//使用elui
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
//import { Button, Select } from 'element-ui';

//使用eui组件
// Vue.use(Button);
// Vue.use(Select);


//导入vue-router，axios
import VueRouter from 'vue-router'
import axios from 'axios'

//导入路由配置模块
import routes from './routeConfig.js'

Vue.use(VueRouter);
Vue.use(routes);

Vue.use(ElementUI);



const router = new VueRouter({
  routes,
})


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

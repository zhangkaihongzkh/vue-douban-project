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


//导入vue-router，axios,vue-resource
import VueRouter from 'vue-router'
import axios from 'axios'
import VueResource from 'vue-resource'

//导入路由配置模块
import routes from './routeConfig.js'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(routes);

Vue.use(ElementUI);


//配置路由信息
const router = new VueRouter({
  routes,
});

//导入axios添加到vue的原型中
//Vue.prototype.$http = axios;


new Vue({
  VueResource,
  router,
  el: '#app',
  render: h => h(App)
})

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
Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App)
})

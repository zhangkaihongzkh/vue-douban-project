import Vue from 'vue'
import App from './App.vue'

//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'

//Vue.use(MintUI);

//使用elui
import ElementUI from 'element-ui';

import { Button, Select } from 'element-ui';

//使用eui组件
Vue.use(Button);
Vue.use(Select);

new Vue({
  el: '#app',
  render: h => h(App)
})

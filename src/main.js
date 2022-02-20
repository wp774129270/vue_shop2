import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import axios from 'axios'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Form, FormItem, Input, Button } from 'element-ui'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
// Vue.use(ElementUI)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

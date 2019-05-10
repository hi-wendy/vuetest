import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/main.less'
import Hellos from '@/components/Hello/index.js';
Vue.use(Hellos);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

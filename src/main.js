import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import store from './store'
Vue.config.productionTip = false;
Vue.prototype.$bus=new Vue()
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

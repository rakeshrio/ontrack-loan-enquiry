import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import Routes from './routes'
import VueRouter from 'vue-router'
import axios from 'axios'
import { ValidationProvider } from 'vee-validate';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false

const router = new VueRouter({
  routes:Routes,
  mode: "history"
})

new Vue({

  store,
  axios,
  router:router,
  ValidationProvider,
  render: h => h(App)
}).$mount('#app')

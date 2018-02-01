// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Datatable from 'vue2-datatable-component'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import MyComponent from './components/DataTable'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Datatable)

Vue.component('data-table', MyComponent)

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Suiue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import App from './App'

Vue.use(Suiue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

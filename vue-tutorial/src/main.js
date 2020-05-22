import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

const bus = new Vue()
export default bus

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

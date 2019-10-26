import Vue from 'vue'
import { VueHammer } from 'vue2-hammer'
import App from './App.vue'

Vue.use(VueHammer);

Vue.config.productionTip = false

VueHammer.config.press = {
  time: 601
};

new Vue({
  render: h => h(App),
}).$mount('#app')

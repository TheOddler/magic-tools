import Vue from 'vue'
import App from './App.vue'
import { VueHammer } from 'vue2-hammer'
import vueInsomnia from "vue-insomnia";

Vue.use(VueHammer);
Vue.use(vueInsomnia);

Vue.config.productionTip = false

VueHammer.config.press = {
  time: 601
};

new Vue({
  render: h => h(App),
}).$mount('#app')

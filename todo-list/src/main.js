import Vue from 'vue'
import App from './App.vue'
import FILTER_METHOD from './constants/FilterMethod'

Vue.config.productionTip = false
Vue.prototype.FILTER_METHOD = FILTER_METHOD

new Vue({
    render: h => h(App),
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import router from './router'

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

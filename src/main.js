import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueGoogleCharts from 'vue-google-charts'
import VueApexCharts from 'vue-apexcharts'
// import bootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(bootstrapVue)

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(VueGoogleCharts)
    // Vue.use(ApexCharts)
Vue.use({
    install(Vue) {
        Vue.prototype.$axios = axios.create({
            // baseURL: "http://localhost:3000/api-admin/v1/"
                baseURL: 'https://api-tryout.edutore.net/api-admin/v1/'
        })
    }
})
Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import vueApexCharts from 'vue-apexcharts';

Vue.config.productionTip = false;
Vue.component('apexchart', vueApexCharts);

new Vue({
  router,
  vuetify,
  vueApexCharts,
  render: (h) => h(App),
}).$mount('#app');

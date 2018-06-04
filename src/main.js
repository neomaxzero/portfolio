import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

Vue.use(VueAnalytics, {
  id: 'UA-69994104-2',
  router,
});

window.axios = require('axios');

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};

try {
  window.$ = window.jQuery = require('jquery');

  require('bootstrap');
}
catch (e) {
}

import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.component('app', require('./components/App.vue'));
Vue.component('weather', require('./components/Weather.vue'));

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});
new Vue({
  el: '#app',
  router
});
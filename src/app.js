// window.Vue = require('vue');
//
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
//
// import VueRouter from 'vue-router';
//
// Vue.use(VueRouter);
//
// Vue.component('app', require('./components/App.vue'));
// Vue.component('weather', require('./components/Weather.vue'));
//
// const app = new Vue({
//     el: '#app'
// });
window.axios = require('axios');

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
};

try {
  window.$ = window.jQuery = require('jquery');

  require('bootstrap');
} catch (e) {}

import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});
new Vue({
  el: '#app',
  router
});
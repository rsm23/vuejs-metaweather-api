import App from './components/App.vue';
import City from './components/City.vue';
import Search from './components/Search.vue';
export const routes = [
  { path: '/', component: App, name: 'Home' },
  { path: '/weather/:woeid', component: City, name: 'City' },
  { path: '/search/:keyword', component: Search, name: 'Search' }
];
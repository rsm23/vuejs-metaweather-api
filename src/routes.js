import App from './components/App.vue';
import Weather from './components/Weather.vue';
export const routes = [
  { path: '/', component: App, name: 'Home' },
  { path: '/weather', component: Weather, name: 'Weather' }
];
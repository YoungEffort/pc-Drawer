import Vue from 'vue';
import App from './App.vue';
import { Button, Drawer } from 'iview';
import 'iview/dist/styles/iview.css';

Vue.component('Button', Button);
Vue.component('Drawer', Drawer);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');

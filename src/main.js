// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueBus from 'vue-bus'
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';
import { Search } from 'mint-ui';
import { Spinner } from 'mint-ui';
import { Loadmore } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Picker } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Field } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Checklist } from 'mint-ui';


Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
Vue.component(Field.name, Field);
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);
Vue.component(Search.name, Search);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(MessageBox.name, MessageBox);
Vue.prototype.$messagebox=MessageBox
Vue.use(VueBus);
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//     if(to.name!='login'&& !window.sessionStorage.getItem("tokenPC")){
//       router.push('/login');
//     }
//     next()

// })




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

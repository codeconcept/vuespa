import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import UserList from './UserList.vue';
import UserDetails from './UserDetails.vue';


Vue.use(VueRouter);

const routes = [
	{ path: '/', redirect: '/users'},
	{ path: '/users', component: UserList },
	{ path: '/users/:id', component: UserDetails	}
];

const router = new VueRouter({ routes: routes });

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

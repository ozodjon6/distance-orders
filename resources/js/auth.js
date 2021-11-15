
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'

import Login from './components/Auth/Login.vue'
import Registration from './components/Auth/Registration.vue'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login/'},
        { path: '/login', component: Login},
        { path: '/registration', component: Registration},
    ]
});

window.Vue = new Vue(Vue.util.extend({
    router,
    data: {},
    components: {},
    template: `<div>
        <router-view></router-view>
    </div>`,

})).$mount('#app');

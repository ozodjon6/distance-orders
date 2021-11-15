
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'

import Main from './components/App/Main.vue'
import MainHeader from './components/App/Head.vue'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    routes: [
        { path: '/', component: Main,},
    ]
});

window.Vue = new Vue(Vue.util.extend({
    router,
    data: {},
    components: {
        MainHeader
    },
    template: `<div>
        <main-header></main-header>
        <router-view></router-view>
    </div>`,

})).$mount('#app');

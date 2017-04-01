import 'iview/dist/styles/iview.css';
// import './css/common.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import VueResource from 'vue-resource';

Vue.use(VueRouter)
Vue.use(VueResource);
Vue.use(iView);

// var app = new Vue({
//     el: '#app',
//     data: {
//         visible: false,
//     },
//     methods: {
//         show: function () {
//                 this.visible = true;
//                 console.log(this.visible);
//         }
//     }
// });

// 针对不同的路由使用不同的组件
const User = { template: '<div>群里谁是傻逼: {{ $route.params.id }}</div>' }

// 定义路由
const routes = [
    { path: '/user/:id', component: User }
]

// 创建router实例
const router = new VueRouter({
    routes: routes
})

// 创建并挂在实例
const app = new Vue({
    router,
    watch: {
        '$route.params.id': function () {
            alert('id have changes');
        }
    }
}).$mount('#app')
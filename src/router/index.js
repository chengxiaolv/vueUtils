import Vue from 'vue'
import Router from 'vue-router'
import jieping from '@/components/jieping' //长途截屏
import ceshi from '@/components/ceshi'
import main from '../main.vue'

/**
 * 测试vuex的使用
 */
import vuex from '@/vuex/vuex'
import vuexDemo1 from '@/vuex/vuexDemo1'
import vuexDemo2 from '@/vuex/vuexDemo2'
import vuexDemo3 from '@/vuex/vuexDemo3'
import vuexDemo4 from '@/vuex/vuexDemo4'

/**
 * 测试es6的使用
 */
import es6 from '@/es6/es6'
import es6_1 from '@/es6/es6_1'
import es6_2 from '@/es6/es6_2'
import es6_3 from '@/es6/es6_3'
import es6_4 from '@/es6/es6_4'



Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        // name: 'main',
        component: main,
        children: [{
            path: '/',
            name: 'jieping',
            component: jieping
        }, {
            path: '/ceshi',
            name: 'ceshi',
            component: ceshi
        }, {
            path: '/vuex',
            // name: 'vuex',
            component: vuex,
            children: [{
                path: '/',
                name: 'vuexDemo1',
                component: vuexDemo1
            }, {
                path: '/vuexDemo2',
                name: 'vuexDemo2',
                component: vuexDemo2
            }, {
                path: '/vuexDemo3',
                name: 'vuexDemo3',
                component: vuexDemo3
            }, {
                path: '/vuexDemo4',
                name: 'vuexDemo4',
                component: vuexDemo4
            }, ]
        }, {
            path: '/es6',
            name: 'es6',
            component: es6,
            children: [{
                path: '/',
                name: 'es6_1',
                component: es6_1
            }, {
                path: '/es6_2',
                name: 'es6_2',
                component: es6_2
            }, {
                path: '/es6_3',
                name: 'es6_3',
                component: es6_3
            }, {
                path: '/es6_4',
                name: 'es6_4',
                component: es6_4
            }, ]
        }]
    }]
})
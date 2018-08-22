import Vue from 'vue'
import Router from 'vue-router'
import jieping from '@/components/jieping'
import ceshi from '@/components/ceshi'
import main from '../main.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: main,
        children: [{
            path: '/',
            name: 'jieping',
            component: jieping
        }, {
            path: '/ceshi',
            name: 'ceshi',
            component: ceshi
        }]
    }]
})
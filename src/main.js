// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import 'es6-promise/auto' //因为ie不支持promise
import store from "./vuex/store/store.js" //引入vuex的集中块。

import * as filters from './utils/filters' //其中import * as filters from ‘./filters/filter.js’是导入filter.js文件中的所有过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
})

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    created() { // 为了解决刷新页面  vuex里面的值，丢失的问题。
        var val = this.$store.getters.bookList;
        if (val.length == 0) {
            var list = JSON.parse(localStorage.getItem("bookList"));
            this.$store.dispatch("assignment", list);
        }
    }
})
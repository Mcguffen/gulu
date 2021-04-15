import Vue from 'vue';
import Button from './button'
import Icon from './icon'

// Vue.component('g-button', Button)
// 全局注册
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2:false,
    },
    // 局部注册
    components: {
        "g-button": Button,
        // "g-icon": Icon
    }
})
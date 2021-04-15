import Vue from 'vue';
import Button from './button'
import Icon from './icon'

// Vue.component('g-button', Button)
// 全局注册
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
    // 局部注册
    components: {
        "g-button": Button,
        // "g-icon": Icon
    }
})
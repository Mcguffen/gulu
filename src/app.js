import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
// 全局注册组件不推荐
// Vue.component('g-button', Button)
//Vue.component('g-icon', Icon)
// Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
    },
    // 局部注册组件推荐
    components: {
        "g-button": Button,
        "g-icon": Icon,
        "g-button-group": ButtonGroup,
        "g-input": Input
    }
})

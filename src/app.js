import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Footer from './footer'
import Content from './content'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Toast from "./toast"
import plugin from './plugin'
// 全局注册组件不推荐
// Vue.component('g-button', Button)
//Vue.component('g-icon', Icon)
// Vue.component('g-button-group', ButtonGroup)
Vue.component('g-footer',Footer)
Vue.component('g-content',Content)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-toast',Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        message: 'hi'
    },
    // 局部注册组件推荐
    components: {
        "g-button": Button,
        "g-icon": Icon,
        "g-button-group": ButtonGroup,
        "g-input": Input,
        "g-row": Row,
        "g-col": Col
    },
    mounted(){
        console.log(Col)
    },
    created() {
        setTimeout(() => {
            let event = new Event('change');
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
        },3000)
    },
    methods:{
        inputChange(e){
            console.log(e)
        },
        showToast(){
            this.$toast('我是message')
        }
    }
})

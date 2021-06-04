import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Footer from './footer'
import content from './content'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Toast from "./toast";
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from "./tabs-body";
import TabsPane from './tabs-pane'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-footer', Footer)
Vue.component('g-content', content)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.use(plugin)
new Vue({
    el: '#app',
    data() {
        return {
            loading1: true,
            loading2: true,
            message: 'hi',
            selectedType:'sports'
        }
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast('<strong>你的智商需要充值</strong>', {
                enableHtml: true,
                closeButton: {
                    text: '已充值',
                    callback() {
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: 2,
                position: position.trim()
            })
        }
    }
})
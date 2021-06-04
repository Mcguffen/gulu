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
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-footer',Footer)
Vue.component('g-content',content)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-toast',Toast)
Vue.use(plugin)
new Vue({
    el:'#app',
    data(){
        return {
            loading1:true,
            loading2:true,
            message:'hi'
        }
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        },
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },showToast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast('<strong>你的智商需要充值</strong>',{
                enableHtml: true,
                closeButton: {
                    text:'已充值',
                    callback(){
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose:false,
                autoCloseDelay: 3,
                position:position
            })
        }
    }
})
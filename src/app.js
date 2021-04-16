import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

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
        "g-button-group": ButtonGroup
    }
})
// 引入chai
import chai from 'chai'
const expect = chai.expect

// 引入chai-spies来测试第五个测试用例
import spies from 'chai-spies'
chai.use(spies)

// 单元测试：用代码来测试代码是否符合预期。
try{
// 测试用例1： 测试按钮含有 icon
    {
        // 动态生成一个按钮 通过下明js将按钮写到页面中去。
        // 将Button组件 对象通过vue的构造函数变成一个构造函数
        const Constructor = Vue.extend(Button)
        // 通过构造函数创建一个button实例，可以放入页面验证一下。
        // 可以传参数
        const vm = new Constructor(
            {
                propsData: {
                    icon: 'settings'
                }
            }
        )
        // 将button实例挂载到内存
        vm.$mount()
        // 来验证一下 在vm中找有没有一个叫‘use’的标签
        let useElement = vm.$el.querySelector('use')
        // console.log(useElement);
        // 验证前先在上面引入chai
        // expect(useElement.getAttribute('xlink:href')).to.eq('settings')
        // 报错
        // Uncaught AssertionError {message: "expected '#isettings' to equal 'settings'", showDiff: true, actual: "#isettings", expected: "settings", operator: "strictEqual", …}
        // 下面的测试通过
        // expect(useElement.getAttribute('xlink:href')).to.eq('#isettings'
        // 简写一下 看的更清楚 我期待的和实际的一致就通过测试
        // 判断叫'use'的标签的href是否是'isettings'
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#isettings')
    }
// 测试用例2：测试如果我们传入一个参数loading，页面就显示一个href='ilaoding'的icon
    {

        const Constructor = Vue.extend(Button)
        const vm = new Constructor(
            {
                propsData: {
                    icon: 'settings',
                    loading: true

                }
            }
        )

        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#iloading')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor(
            {
                propsData: {
                    icon: 'settings'
                }
            }
        )
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        // 测试完打扫下战场 button元素删掉 对象删掉 释放内存
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor(
            {
                propsData: {
                    icon: 'settings',
                    iconPosition: 'right'
                }
            }
        )
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        // mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor(
            {
                propsData: {
                    icon: 'settings',

                }
            }
        )
        vm.$mount()
        let spy = chai.spy(function (){
            // console.log('spy回调函数被触发')
        })
        vm.$on('click',spy)
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
        // 期望gButton的click回调函数执行 需要用到一个库 chai-spies
        // button.$el.remove()
        // button.$destroy()
    }
}catch (error){
    window.errors = [error]
}finally {
    // 如果存在错误就打印出来
    window.errors && window.errors.forEach((error)=>{
        console.error.log(error.message)
    })
}
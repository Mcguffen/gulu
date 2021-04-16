import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

// Vue.component('g-button', Button)
// 全局注册
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
    },
    // 局部注册
    components: {
        "g-button": Button,
        // "g-icon": Icon
    }
})
// 引入chai
import chai from 'chai'

const expect = chai.expect
// 单元测试
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
    // 将button实例挂载,替换 id = 'test'的div
    vm.$mount('#test')
    // 来验证一下
    let useElement = vm.$el.querySelector('use')
    // console.log(useElement);
    // 验证前先在上面引入chai
    // expect(useElement.getAttribute('xlink:href')).to.eq('settings')
    // 报错
    // Uncaught AssertionError {message: "expected '#isettings' to equal 'settings'", showDiff: true, actual: "#isettings", expected: "settings", operator: "strictEqual", …}
    // 下面的测试通过
    // expect(useElement.getAttribute('xlink:href')).to.eq('#isettings'
    // 简写一下 看的更清楚 我期待的和实际的一致就通过测试
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#isettings')
}
//
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
    vm.$on('click',function (){
        console.log(1)
    })
    let button = vm.$el
    button.click()
    // 期望gButton的click函数执行
    // button.$el.remove()
    // button.$destroy()
}
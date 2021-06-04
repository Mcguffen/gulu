const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from "../src/tabs-body";
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    //BDD 行为驱动测试
    it('存在.', () => {
        expect(TabsItem).to.exist
    })
    it('接受name属性',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
        vm.$destroy()
    })
    it('接受disabled属性',()=>{
        const callback=sinon.fake()
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        vm.$on('click',callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
        vm.$destroy()
    })
})
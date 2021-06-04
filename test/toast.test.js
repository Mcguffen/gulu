const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    //BDD 行为驱动测试
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props',()=>{
        it('接收autoClose',(done)=>{
            const div=document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose:1
                }
            }).$mount(div)

            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
                vm.$destroy()
            },1500)
        })
        it('接收closeButton',(done)=>{
            const callback=sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton:{
                        text:'关闭吧',
                        callback
                    }
                }
            }).$mount()
            let closeButton=vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            setTimeout(()=>{
                closeButton.click()
                expect(callback).to.have.been.called
                done()
                vm.$destroy()
            },200)
        })
        it('接收enableHtml',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    enableHtml:true
                }
            })
            vm.$slots.default=['<strong id="test">hi</strong>']
            vm.$mount()
            let strong=vm.$el.querySelector('#test')
            expect(strong).to.exist
            vm.$destroy()
        })
        it('接收position',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    position:'middle'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.eq(true)
            vm.$destroy()
        })
    })
})
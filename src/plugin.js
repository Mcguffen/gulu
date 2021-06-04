//为什么要用plugin，1.避免吧vue配到另外一个轮子上
// 2.$toast可能会覆盖现有的东西，但我们不确定，所以让用户自己去覆盖
import Toast from './toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast=function (message,toastOptions){
            let Constructor =Vue.extend(Toast)
            let toast=new Constructor({
                propsData:toastOptions
            })
            //slot要放在mount前面
            toast.$slots.default=[message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
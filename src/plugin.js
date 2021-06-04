//为什么要用plugin，1.避免吧vue配到另外一个轮子上
// 2.$toast可能会覆盖现有的东西，但我们不确定，所以让用户自己去覆盖
import Toast from './toast'
//我们不让同时出现两个相同的toast

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if(currentToast){
                currentToast.close()
            }
            currentToast=createToast({Vue,
                message,
                propsData: toastOptions,
                onClose:()=>{
                    currentToast=null
                }
            })
        }
    }
}
//helpers
let createToast = ({Vue, message, propsData,onClose}) => {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: propsData
    })
    //slot要放在mount前面
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast
}
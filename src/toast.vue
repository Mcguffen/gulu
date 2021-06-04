<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <!--    这里为了能接受标签，不能用slot了-->
        <div v-html="$slots.default[0]" v-if="enableHtml"></div>
        <slot v-else></slot>
      </div>
      <div class="line" ref="line"></div>
      <span class="close"
            v-if="closeButton"
            @click="obClickClose"
            v-html="closeButton.text"
      >
    </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: [Boolean,Number],
      default: 5,
      validator(value) {
        return value === false || typeof value === 'number';
      }
    },
    closeButton: {
      type: Object,
      //结论： 如果你的default值是一个对象，那么不能直接写，要用函数return这个对象
      default: () => {
        return {
          text: '关闭', callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'button', 'middle'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClasses() {
      return {[`position-${this.position}`]: true}
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles() {
      //mount的时候是拿不到这个高度的，要在nextTick里面拿到
      this.$nextTick(() => {
        const {height} = this.$refs.toast.getBoundingClientRect()
        this.$refs.line.style.height = height + 'px'
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    obClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-middle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration:300ms;
  &.position-top {
    top: 0;
    .toast{
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast{
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%,-50%);
    animation: slide-middle $animation-duration;
  }
}
.toast {
  animation: slide-up 250ms;
  font-size: $font-size;
  min-height: $toast-min-height;
  background: $toast-bg;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
  border-radius: 4px;
  color: #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .message {
    padding: 4px 0;
  }
  .close {
    display: inline-block;
    color: #fff;
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    border: .5px solid #666;
    margin-left: 16px;
  }
}
</style>
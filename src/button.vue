<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
// 在button里全局注册icon 最好不要这样做哦 我们使用局部组件
// import Vue from 'vue'
// import Icon from './icon'
// Vue.component('g-icon',Icon)


import Icon from './icon'
export default {
  name: "GuluButton",
  // 局部注册组件
  components: {
    'g-icon': Icon
  },
  // props: ['icon', 'iconPosition']
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    // 给默认值 防止出现icon-undifined
    iconPosition: {
      type: String,
      default: 'left',
      // 属性检查器，防止用户瞎传数据
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0%{ transform: rotate(0deg);}
  100%{
    transform: rotate(360deg);}
}
.loading{
  animation: spin 2s infinite linear;
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em; /*按钮不设置宽度，使用padding左右1em来控制*/
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  //内部居中
  display: inline-flex;
  justify-content: center;
  align-items: center;
  //和外部对齐
  vertical-align: middle;
  /* &来代表当前的选择器 */
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: .1em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }

    > .content {
      order: 1;
    }
  }
}

</style>
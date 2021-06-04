<template>
  <div class="g-popover" ref="popover">
    <div class="g-popover-content"
         v-show="visible"
         ref="contentWrapper"
         :class="{[`position-${position}`]:true}"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span class="trigger" ref="triggerWrapper" style="display: inline-block">
      <slot name="trigger"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false
    }
  },
  props:{
    position:{
      type:String,
      default:'top',
      validator(value){
        return ['top','bottom','left','right'].indexOf(value)>=0
      }
    },
    trigger:{
      type:String,
      default: 'click',
      validator(value) {
        return ['hover','click'].indexOf(value)>=0;
      }
    }
  },
  mounted() {
    if(this.trigger==='click'){
      this.$refs.popover.addEventListener('click',this.showContent)
    }else {
      this.$refs.popover.addEventListener('mouseenter',this.open)
      this.$refs.popover.addEventListener('mouseleave',this.close)
    }
  },
  destroyed() {
    if(this.trigger==='click'){
      this.$refs.popover.removeEventListener('click',this.showContent)
    }else {
      this.$refs.popover.removeEventListener('mouseenter',this.open)
      this.$refs.popover.removeEventListener('mouseleave',this.close)
    }
  },
  methods: {
    positionContent() {
      const {contentWrapper,triggerWrapper}=this.$refs
      document.body.appendChild( contentWrapper)
      const {height:height2}=contentWrapper.getBoundingClientRect()
      const {width,height,top, left} = triggerWrapper.getBoundingClientRect()
      let positions={
        top:{
          top:top + window.scrollY,
          left:left + window.scrollX
        },
        bottom:{
          top:top + height+window.scrollY,
          left:left + window.scrollX
        },
        left:{
          top:top+window.scrollY+(height-height2)/2,
          left:left + window.scrollX
        },
        right:{
          top:top+window.scrollY+(height-height2)/2,
          left:left + window.scrollX+width
        }
      }
      contentWrapper.style.left=positions[this.position].left+'px'
      contentWrapper.style.top=positions[this.position].top+'px'
    },
    onClickDoc(e) {
      if (this.$refs.popover && (this.$refs.popover === e.target ||
          this.$refs.contentWrapper.contains( e.target ))) {
        return;
      }
      this.close()
    },
    open() {
      this.visible = true
      setTimeout( () => {
        this.positionContent()
        document.addEventListener( 'click', this.onClickDoc )
      } )
    },
    close() {
      this.visible = false
      document.removeEventListener( 'click', this.onClickDoc )
    },
    showContent(event) {
      if (this.$refs.triggerWrapper.contains( event.target )) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  },
}
</script>

<style scoped lang='scss'>
$border-color:#333;
.g-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.g-popover-content {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: 4px;
  //box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  filter: drop-shadow(0 1px 1px red);
  padding: 1em;
  max-width: 20em;
  word-break: break-all;
  background-color: #fff;
  &::before,&::after{
    content:'';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
  }
  &.position-top{
    transform: translateY(-100%);
    margin-top: -10px;
    &::before{
      border-bottom: none;
      border-top-color: black;
      top: 100%;
    }
    &::after{
      border-bottom: none;
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom{
    margin-top: 10px;
    &::before{
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after{
      border-top: none;
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left{
    margin-left: -10px;
    transform: translateX(-100%);
    &::before{
      border-right: none;
      border-left-color: black;
      top: 50%;
      transform: translateY(-50%);
      left: 100%;
    }
    &::after{
      border-right: none;
      border-left-color: #fff;
      top: 50%;
      transform: translateY(-50%);
      left: calc(100% - 1px);
    }
  }
  &.position-right{
    margin-left: 10px;
    &::before{
      border-left: none;
      border-right-color: black;
      left: 0;
      top: 50%;
      transform: translate(-100%,-50%);
    }
    &::after{
      border-left: none;
      border-right-color: #fff;
      left: 1px;
      top: 50%;
      transform: translate(-100%,-50%);
    }
  }
}
</style>
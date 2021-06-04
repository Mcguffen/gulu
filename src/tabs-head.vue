<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line" v-show="x"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export  default {
  name:'GuluTabsHead',
  inject:['eventBus'],
  data(){
    return {
      x:false
    }
  },
  mounted(){
    this.eventBus.$on('update:selected',(item,vm)=>{
      this.x=true
      const {width,left}=vm.$el.getBoundingClientRect()
      this.$refs.line.style.width=`${width}px`
      this.$refs.line.style.transform=`translateX(${left-21}px)`
    })
  }
}
</script>


<style lang="scss" scoped>
$tab-height:40px;
$blue:blue;
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ddd;
  >.line{
    position: absolute;
    bottom: 0;
    border-bottom:1px solid $blue;
    transition: all 250ms;
  }
  >.actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }
}
</style>
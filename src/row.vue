<template>
  <div class="row" :style="rolStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export  default {
  props:{
    gutter:{
      type:[Number,String]
    },
    align:{
      type: String,
      validator(value){
        return ['left','right','center'].includes(value)
      }
    }
  },
  mounted(){
    this.$children.forEach(item=>{
      item.gutter=this.gutter
    })
  },
  computed:{
    rolStyle(){
      const {gutter}=this
      return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}
    },
    rowClass(){
      const {align}=this
      return [align && `align-${align}`]
    }
  }
}
</script>

<style scoped lang="scss">
.row{
  display: flex;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-right{
    justify-content: flex-end;
  }
  &.align-center{
    justify-content: center;
  }
}
</style>
<template>
  <div class="tabs-item" :class="classes" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export  default {
  name:'GuluTabsItem',
  inject:['eventBus'],
  props:{
    disabled:{
      type:Boolean,
      default:false
    },
    name:{
      type:String|Number,
      required:true
    }
  },
  data(){
    return{
      active:false
    }
  },
  created() {
    this.eventBus.$on('update:selected',(name)=>{
      this.active = name === this.name;
    })
  },
  methods:{
    onClick(){
      if(this.disabled){return }
      this.eventBus.$emit('update:selected',this.name,this)
    }
  },
  computed:{
    classes(){
      return {
        active:this.active,
        disabled: this.disabled
      }
    }
  }
}
</script>


<style lang="scss" scoped>
$blue:blue;
$disabled-text-color:grey;
.tabs-item{
  height: 100%;
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active{
    color:$blue;
    font-weight: bold;
  }
  &.disabled{
    color:$disabled-text-color
  }
}
</style>
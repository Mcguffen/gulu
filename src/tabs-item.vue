<template>
  <div class="tabs-item" :class="classes" @click="xxx">
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
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  },
  computed:{
    classes(){
      return {
        active:this.active
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;
  &.active{
    background-color: red;
  }
}
</style>
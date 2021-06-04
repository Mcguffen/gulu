<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export  default {
  name:'GuluTabsHead',
  inject:['eventBus'],
  create(){
  }
}
</script>


<style lang="scss" scoped>
$tab-height:40px;

.tabs-head{
  border: 1px solid red;
  display: flex;
  min-height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  >.actions-wrapper{
    margin-left: auto;
  }
}
</style>
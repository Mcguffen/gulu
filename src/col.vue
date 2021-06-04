<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluCol',
    props:{
        span:[Number,String]
    }
}
</script>

<style scoped lang='scss'>
.col{
    border: 1px solid red;
    height: 100px;
    background: gray;

}
</style>
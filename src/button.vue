<template>
  <button class="g-button">按钮</button>
</template>

<script>
export  default {}
</script>

<style lang="scss">
.g-button{
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;/*按钮不设置宽度，使用padding左右1em来控制*/
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  /* &来代表当前的选择器 */
  &:hover{
    border-color: var(--border-color-hover);
  }
  &:active{
    background-color: var(--button-active-bg);
  }
  &:focus{
    outline: none;
  }
}

</style>
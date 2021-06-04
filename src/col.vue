<template>
  <div class="col" :class="colClass"
       :style="colStyle">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCol',
  props: {
    span: [Number, String],
    offset: {
      type: [Number, String]
    }
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    },
    colClass() {
      return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`]
    }
  }
}
</script>

<style scoped lang="scss">
.col {
  padding: 0 10px;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }
}
</style>
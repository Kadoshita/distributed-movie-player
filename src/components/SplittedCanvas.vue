<template>
  <sui-grid :columns=4 :stackable=true>
    <single-canvas
    v-for="c in canvasData"
    :key="c.id"
    :canvas-data="c"/>
  </sui-grid>
</template>
<script>
import SingleCanvas from './SingleCanvas'

export default {
  components: {
    SingleCanvas
  },
  props: {
    canvasData: Array
  }
}
</script>

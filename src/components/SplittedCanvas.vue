<template>
  <div>
    <single-canvas
    v-for="c in canvasData"
    :key="c.id"
    :canvas-data="c"/>
  </div>
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

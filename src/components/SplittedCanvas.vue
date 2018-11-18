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
  data () {
    const image = new Image()
    image.src = require('../assets/logo.png')
    return {
      canvasData: [{
        id: '1',
        data: image
      },
      {
        id: '2',
        data: image
      },
      {
        id: '3',
        data: image
      },
      {
        id: '4',
        data: image
      }]
    }
  }
}
</script>

<template>
  <sui-grid :columns=4 :stackable=true>
    <main-single-canvas :canvas-data="canvasData"></main-single-canvas>
  </sui-grid>
</template>
<script>
import MainSingleCanvas from './MainSingleCanvas'

export default {
  components: {
    MainSingleCanvas
  },
  data () {
    const image = new Image()
    image.src = require('../assets/logo.png')
    return {
      canvasData: {
        id: '0',
        data: image,
        isMain: true
      }
    }
  }
}
</script>

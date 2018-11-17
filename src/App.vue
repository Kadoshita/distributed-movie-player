<template>
  <div id="app">
    <splitted-canvas :canvas-data="canvasData"/>
  </div>
</template>

<script>
import SplittedCanvas from './components/SplittedCanvas'

export default {
  name: 'App',
  components: {
    SplittedCanvas
  },
  data () {
    return {
      canvasData: [{
        id: 'canvas-1',
        data: null
      },
      {
        id: 'canvas-2',
        data: null
      },
      {
        id: 'canvas-3',
        data: null
      },
      {
        id: 'canvas-4',
        data: null
      },
      {
        id: 'canvas-5',
        data: null
      },
      {
        id: 'canvas-6',
        data: null
      },
      {
        id: 'canvas-7',
        data: null
      },
      {
        id: 'canvas-8',
        data: null
      }]
    }
  }
}
</script>

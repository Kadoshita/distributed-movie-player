<template>
  <div id="app">
    <sui-grid :columns=2 :stackable=true>
      <splitted-canvas></splitted-canvas>
      <main-canvas></main-canvas>
    </sui-grid>
  </div>
</template>

<script>
import SplittedCanvas from './components/SplittedCanvas'
import MainCanvas from './components/MainCanvas'

export default {
  name: 'App',
  components: {
    SplittedCanvas,
    MainCanvas
  }
}
</script>

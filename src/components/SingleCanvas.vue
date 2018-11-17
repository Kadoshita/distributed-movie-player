<template>
  <sui-grid-column :width=4>
    <p>{{ canvasData.id }}</p>
    <canvas></canvas>
  </sui-grid-column>
</template>
<script>
export default {
  props: {
    canvasData: Object
  }
}
</script>
<style>
canvas{
  width: 100%;
  height: auto;
}
</style>

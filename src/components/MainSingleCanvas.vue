<template>
  <sui-grid-column :width=8>
    <canvas ref="canvas" class="main-single-canvas"></canvas>
  </sui-grid-column>
</template>
<script>
export default {
  props: {
    canvasData: Object
  },
  methods: {
    draw (canvasData) {
      this.height = canvasData.data.height
      this.width = canvasData.data.width
      this.ctx.drawImage(canvasData.data, 0, 0, this.width, this.height)
    }
  },
  mounted () {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    this.draw(this.canvasData)
  }
}
</script>
<style>
.main-single-canvas{
  width: 640px;
  height: 480px;
}
</style>

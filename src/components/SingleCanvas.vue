<template>
  <div>
    <p>{{ canvasData.id }}</p>
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  props: {
    canvasData: Object
  }
}
</script>

<template>
  <div v-hammer:tap="toggleFullscreen">{{ isFullscreen ? "✕" : "⛶" }}</div>
</template>

<script>
export default {
  data: function() {
    return { isFullscreen: false };
  },
  methods: {
    toggleFullscreen: function() {
      if (this.isFullscreen) {
        document.exitFullscreen();
        this.isFullscreen = false;
      } else {
        document.body.requestFullscreen();
        this.isFullscreen = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  font-size: 500%;
  background-size: 100% 100%;
  height: 150px;
  width: 150px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
</style>

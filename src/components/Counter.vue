<template>
  <div v-hammer:swipe="onSwipe">{{ !showZero && count == 0 ? "" : count }}</div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    showZero: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSwipe: function(event) {
      if (event.direction == 8) {
        //up
        this.count++;
      } else if (event.direction == 16) {
        //down
        this.count--;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: red;
  height: 150px;
}
</style>

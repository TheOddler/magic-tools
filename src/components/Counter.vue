<template>
  <div
    v-hammer:swipe="onSwipe"
    @click="add"
    @contextmenu.prevent="subtract"
  >{{ !showZero && count == 0 ? "" : count }}</div>
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
      default: true
    }
  },
  methods: {
    onSwipe: function(event) {
      if (event.direction == 8) {
        //up
        this.add();
      } else if (event.direction == 16) {
        //down
        this.subtract();
      }
    },
    add() {
      this.count++;
    },
    subtract() {
      this.count--;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /*Debug */
  background-color: rgba(255, 0, 0, 0.3);
}
</style>

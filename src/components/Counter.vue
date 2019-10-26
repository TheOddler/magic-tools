<template>
  <div
    v-hammer:swipe="onSwipe"
    v-hammer:tap="add"
    v-hammer:press="reset"
    @contextmenu.prevent="subtract"
  >{{ !showZero && count == 0 ? "" : count }}</div>
</template>

<script>
export default {
  data() {
    return {
      startCount: 0
    };
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
  created() {
    this.startCount = this.count;
  },
  methods: {
    onSwipe(event) {
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
    },
    reset() {
      this.count = this.startCount;
      navigator.vibrate(50);
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
}
</style>

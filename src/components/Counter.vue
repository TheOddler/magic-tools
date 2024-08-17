<template>
  <div
    v-hammer:swipe="onSwipe"
    v-hammer:tap="add"
    v-hammer:press="reset"
    @contextmenu.prevent="subtract"
  >
    {{ !showZero && internalCount == 0 ? "" : internalCount }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      internalCount: this.count,
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
  watch: {
    count(newVal) {
      this.internalCount = newVal;
    }
  },
  created() {
    this.startCount = this.count;
  },
  methods: {
    onSwipe(event) {
      if (event.direction == 8) {
        // up
        this.add();
      } else if (event.direction == 16) {
        // down
        this.subtract();
      }
    },
    add() {
      this.internalCount++;
      this.$emit('update:count', this.internalCount); // Emit the updated value to the parent
    },
    subtract() {
      this.internalCount--;
      this.$emit('update:count', this.internalCount);
    },
    reset() {
      this.internalCount = this.startCount;
      this.$emit('update:count', this.internalCount);
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

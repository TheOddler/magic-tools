<template>
  <div
    v-hammer:tap="randomizeAnimated"
    v-on:animationend="onAnimationEnd"
    :class="dieClass"
  >{{ number }}</div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      interval: false
    };
  },
  props: {
    sides: {
      type: Number,
      default: 6
    },
    animationSteps: {
      type: Number,
      default: 10
    }
  },
  created() {
    this.randomize();
  },
  computed: {
    dieClass: function() {
      return "die" + this.sides;
    }
  },
  methods: {
    startFlip() {
      if (!this.flipping) {
        this.flipping = true;
        this.prevHeads = this.heads;
        this.heads = Math.random() >= 0.5;
      }
    },
    onAnimationEnd() {
      this.flipping = false;
    },
    randomize() {
      this.number = Math.floor(Math.random() * this.sides) + 1;
    },
    randomizeAnimated() {
      clearInterval(this.interval);

      var self = this;
      var count = this.animationSteps;
      var handler = function() {
        self.randomize();
        count--;
        if (count == 0) {
          clearInterval(self.interval);
          self.interval = false;
        }
        window.console.log(count);
      };
      this.interval = setInterval(handler, 50, 500);
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

.die6 {
  background-image: url("../assets/Die6.png");
}

.die20 {
  background-image: url("../assets/Die20.png");
}
</style>

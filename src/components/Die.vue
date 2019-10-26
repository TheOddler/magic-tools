<template>
  <div
    v-hammer:tap="throwDie"
    @animationend="onAnimationEnd"
    :class="[dieClass, throwing ? 'throwing' : '']"
  >{{ number }}</div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      interval: false,
      throwing: false
    };
  },
  props: {
    sides: {
      type: Number,
      default: 6
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
      this.throwing = false;
      clearInterval(this.interval);
    },
    randomize() {
      this.number = Math.floor(Math.random() * this.sides) + 1;
    },
    throwDie() {
      if (!this.throwing) {
        this.throwing = true;
        clearInterval(this.interval);

        var self = this;
        var handler = function() {
          self.randomize();
        };
        this.interval = setInterval(handler, 50);
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

.die6 {
  background-image: url("../assets/Die6.png");
}

.die20 {
  background-image: url("../assets/Die20.png");
}

.throwing {
  animation: throw 0.3s cubic-bezier(0.1, 0.3, 0.9, 0.7);
  z-index: 1000;
}

@keyframes throw {
  50% {
    transform: scale(1.5) rotate(360deg);
  }
  100% {
    transform: scale(1) rotate(720deg);
  }
}
</style>

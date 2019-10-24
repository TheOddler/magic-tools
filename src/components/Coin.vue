<template>
  <div
    v-hammer:tap="startFlip"
    :class="classes"
    v-on:animationend="onAnimationEnd"
  >{{ flipping ? "" : heads ? "H" : "T" }}</div>
</template>

<script>
export default {
  data: function() {
    return {
      heads: true,
      prevHeads: true,
      flipping: false
    };
  },
  computed: {
    classes: function() {
      return [
        (!this.flipping && this.heads) || (this.flipping && this.prevHeads)
          ? "heads"
          : "tails",
        this.flipping ? (this.heads ? "toHeads" : "toTails") : ""
      ];
    }
  },
  methods: {
    startFlip: function() {
      if (!this.flipping) {
        this.flipping = true;
        this.prevHeads = this.heads;
        this.heads = Math.random() >= 0.5;
      }
    },
    onAnimationEnd: function() {
      this.flipping = false;
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

.heads {
  background-image: url("../assets/Coin.png");
}

.tails {
  background-image: url("../assets/CoinTails.png");
}

.toHeads {
  animation: flipToHeads 0.8s cubic-bezier(0.1, 0.3, 0.9, 0.7);
}

.toTails {
  animation: flipToTails 0.8s cubic-bezier(0.1, 0.3, 0.9, 0.7);
}

@keyframes flipToHeads {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5) rotateY(360deg) translateY(-20px);
    background-image: url("../assets/CoinTails.png");
  }
  100% {
    transform: scale(1) rotateY(720deg);
    background-image: url("../assets/Coin.png");
  }
}

@keyframes flipToTails {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5) rotateY(360deg) translateY(-20px);
    background-image: url("../assets/Coin.png");
  }
  100% {
    transform: scale(1) rotateY(720deg);
    background-image: url("../assets/CoinTails.png");
  }
}
</style>

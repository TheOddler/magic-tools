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
  animation: flipToHeads 0.3s cubic-bezier(0.1, 0.3, 0.9, 0.7);
  z-index: 1000;
}

.toTails {
  animation: flipToTails 0.3s cubic-bezier(0.1, 0.3, 0.9, 0.7);
  z-index: 1000;
}

@keyframes flipToHeads {
  12.5% {
    transform: scale(0, 1.125);
  }
  25% {
    transform: scale(1, 1.25);
    background-image: url("../assets/CoinTails.png");
  }
  37.5% {
    transform: scale(0, 1.375);
  }
  50% {
    transform: scale(1, 1.5);
    background-image: url("../assets/Coin.png");
  }
  62.5% {
    transform: scale(0, 1.375);
  }
  75% {
    transform: scale(1, 1.25);
    background-image: url("../assets/CoinTails.png");
  }
  87.5% {
    transform: scale(0, 1.125);
  }
  100% {
    transform: scale(1, 1);
    background-image: url("../assets/Coin.png");
  }
}

@keyframes flipToTails {
  12.5% {
    transform: scale(0, 1.125);
  }
  25% {
    transform: scale(1, 1.25);
    background-image: url("../assets/Coin.png");
  }
  37.5% {
    transform: scale(0, 1.375);
  }
  50% {
    transform: scale(1, 1.5);
    background-image: url("../assets/CoinTails.png");
  }
  62.5% {
    transform: scale(0, 1.375);
  }
  75% {
    transform: scale(1, 1.25);
    background-image: url("../assets/Coin.png");
  }
  87.5% {
    transform: scale(0, 1.125);
  }
  100% {
    transform: scale(1, 1);
    background-image: url("../assets/CoinTails.png");
  }
}
</style>

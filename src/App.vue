<template>
  <div id="app" :style="{ transform: 'scale(' + scale + ')' }">
    <Coin />
    <Coin />
    <Coin />
    <Die :sides="6" />
    <Die :sides="20" />
    <PlayerField />
  </div>
</template>

<script>
import PlayerField from "./components/PlayerField.vue";
import Coin from "./components/Coin.vue";
import Die from "./components/Die.vue";

export default {
  name: "app",
  data: function() {
    return {
      scale: 1
    };
  },
  components: {
    PlayerField,
    Coin,
    Die
  },
  created() {
    this.updateScale();
  },
  mounted: function() {
    window.addEventListener("resize", this.updateScale);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.updateScale);
  },
  methods: {
    updateScale(event) {
      window.console.log(
        "resized: " + window.innerWidth + "; " + window.innerHeight
      );
      window.console.log(event);
      var xScale = window.innerWidth / 1006;
      var yScale = window.innerHeight / 654;
      this.scale = Math.min(xScale, yScale);
    }
  }
};
</script>

<style>
body {
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
  text-shadow: 0px 0px 5px black, 2px 2px 2px black;

  width: 1006px;
  height: 654px;

  transform-origin: top left;
}
</style>

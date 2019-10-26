<template>
  <div id="app">
    <Coin />
    <Coin />
    <Coin />
    <Coin />
    <Coin />
    <PlayerField />
  </div>
</template>

<script>
import PlayerField from "./components/PlayerField.vue";
import Coin from "./components/Coin.vue";

export default {
  name: "app",
  components: {
    PlayerField,
    Coin
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

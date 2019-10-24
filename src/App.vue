<template>
  <div id="app">
    <Counter :count="20" :showZero="true" />
    <Counter :count="10" />
    <Counter />
    <Counter :showZero="false" />
    <Counter :showZero="true" />
    <Coin />
    <Coin />
    <Coin />
    <Coin />
    <Coin />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Coin from "./components/Coin.vue";

export default {
  name: "app",
  components: {
    Counter,
    Coin
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

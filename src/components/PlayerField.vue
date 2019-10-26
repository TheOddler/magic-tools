<template>
  <div id="field">
    <Counter class="large" id="health" :count="20" />
    <Counter class="small" id="win" :count="0" />
    <Counter class="small" id="star" :count="0" :show-zero="false" />
    <Counter class="small" id="poison" :count="0" :show-zero="false" />

    <Counter class="small mana" id="colorless" :count="0" :show-zero="false" />
    <Counter class="small mana" id="white" :count="0" :show-zero="false" />
    <Counter class="small mana" id="blue" :count="0" :show-zero="false" />
    <Counter class="small mana" id="black" :count="0" :show-zero="false" />
    <Counter class="small mana" id="red" :count="0" :show-zero="false" />
    <Counter class="small mana" id="green" :count="0" :show-zero="false" />
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  components: {
    Counter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  position: Absolute;
}

.small {
  font-size: 75px;
}

.large {
  font-size: 150px;
}

#field {
  position: relative; /* must be relative so children can be (positioned) absolute */
  background-image: url("../assets/PlayerField.png");
  width: 1006px;
  height: 504px;
}

#health {
  left: 440px;
  top: 60px;
  width: 316px;
  height: 270px;
}

#win {
  left: 800px;
  top: 10px;
  width: 128px;
  height: 150px;
}

#star {
  left: 758px;
  top: 244px;
  width: 150px;
  height: 150px;
}

#poison {
  left: 406px;
  top: 308px;
  width: 110px;
  height: 110px;
}

.mana {
  width: 114px;
  height: 222px;
}

#colorless {
  left: 34px;
  top: 30px;
}

#white {
  left: 148px;
  top: 30px;
}

#blue {
  left: 262px;
  top: 30px;
}

#black {
  left: 34px;
  top: 252px;
}

#red {
  left: 148px;
  top: 252px;
}

#green {
  left: 262px;
  top: 252px;
}
</style>

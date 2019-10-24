<template>
  <div v-hammer:swipe="onSwipe">{{ count }}</div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    };
  },
  props: {
    label: String
  },
  methods: {
    onSwipe: function(event) {
      if (event.direction == 8) {
        //up
        this.count++;
      } else if (event.direction == 16) {
        //down
        this.count--;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: red;
  height: 150px;
}
</style>

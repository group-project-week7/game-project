<template>
  <div id="app">
    <router-view/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!-- <game></game> -->
  </div>
</template>


<script>
import Game from './views/Game.vue'
export default {
  components: {
    Game,
  }
}
</script>
<style>
*{
  margin: 0px;
  padding: 0px;
}
</style>

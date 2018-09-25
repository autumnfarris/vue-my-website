<template>
  <div id="app">
    <div></div>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/nav-bar/nav-bar.vue";
export default {
  name: "App",
  components: {
     Navigation: Navigation
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

<template>
  <div id="app" :class="currentPage()">
    <div></div>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import dasherize from "underscore.string/dasherize";
import Navigation from "./components/nav-bar/nav-bar.vue";

export default {
  name: "App",
  components: {
    Navigation: Navigation
  },
  methods: {
    currentPage: function() {
      return dasherize(this.$router.currentRoute.name);
    }
  }
};
</script>

<style lang="scss" src="./App.scss"/>

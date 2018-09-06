<template>

  <div class="nav-bar">
    <nav>

      <router-link v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>

</template>

<script lang="js" src="./nav-bar.js" />
<style src="./nav-bar.css" />

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {RouterLink, RouterView} from"vue-router";
import Header from './components/Header.vue';
</script>

<template>
  <Header/>
  <RouterView/>
</template>

<style>
body {
  background-image: url(https://ak.picdn.net/shutterstock/videos/1021959073/thumb/1.jpg?ip=x480);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

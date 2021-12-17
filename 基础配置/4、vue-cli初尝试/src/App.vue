<template>
  <div id="app">
      halo呀 vue
      <print></print>
  </div>
</template>

<script>

import print from "./components/print.vue"
export default {
  name: 'App',
  components: {
      print
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <pcDrawer imgType="idcardFront"/>
  </div>
</template>

<script>
import pcDrawer from './components/pcDrawer.vue'

export default {
  name: 'app',
  components: {
    pcDrawer
  }
}
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

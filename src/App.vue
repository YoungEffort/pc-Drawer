<template>
  <div id="app">
    <Button @click="value1 = true" type="primary">Open</Button>
    <pcDrawer title="idcardFront" class_name="parent1" width="800" height="70%" v-model="value1" @on-visible-change="handleChange" :mask_closable="false" :showFooter="true">
      <div slot="content">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
      <div slot="footer">
        <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
        <Button type="primary" @click="value3 = false">Submit</Button>
      </div>
    </pcDrawer>
    <br>
    <pcDrawer title="idcardFront" class_name="parent2" height="80%" />
    <br>
    <pcDrawer title="idcardFront" class_name="parent3" />
  </div>
</template>

<script>
import pcDrawer from './components/pcDrawer.vue'

export default {
  name: 'app',
  components: {
    pcDrawer
  },
  data() {
    return {
      value1: false
    }
  },
  methods: {
    handleChange(val) {
      this.value1 = val
    }
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

<template>
  <div class='pc-drawer'>
    <Button @click="value1 = true" type="primary">Open</Button>
    <Drawer title="Basic Drawer" :closable="false" v-model="value1">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
  </div>
</template>

<script>
export default {
  name: 'pcDrawer',
  data() {
    return {
value1: false
    }
  },
  methods: {}
}
</script>

<style scoped lang='less'>
.pc-drawer {
}
</style>

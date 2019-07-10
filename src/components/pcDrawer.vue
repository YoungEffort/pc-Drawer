<template>
  <div class='pc-drawer'>
    <Drawer :title="title" :closable="closable" v-model="myvalue" :width="width" :class-name="class_name" @on-visible-change="handleChange" :mask-closable="mask_closable" :mask="mask">
      <slot name="content"></slot>
      <div class="drawer-footer" v-if="showFooter">
        <slot name="footer"></slot>
      </div>
    </Drawer>
  </div>
</template>

<script>
export default {
  name: 'pcDrawer',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    closable: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: 256
    },
    class_name: {
      type: String,
      required: true
    },
    height: {
      type: [String, Number],
      default: '100%'
    },
    mask_closable: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    showFooter:{
      type: Boolean,
      default: true
    }
  },
  mounted() {
    var vm = this
    var content = document.querySelector('.' + vm.$props.class_name).querySelector('.ivu-drawer-content')
    content.style.height = vm.$props.height
    vm.myvalue = vm.$props.value
  },
  watch: {
    value(val) {
      this.myvalue = val
    }
  },
  data() {
    return {
      myvalue: false
    }
  },
  methods: {
    handleChange(val) {
      this.$emit("on-visible-change", val)
    }
  }
}
</script>

<style lang='less'>
.ivu-drawer-wrap {
  .ivu-drawer-content {
    position: absolute !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
  }
}
.drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
</style>


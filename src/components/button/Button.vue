<template>
  <el-button
    ref="benchButton"
    :class="['bench-btn', typeClass]"
    :style="{
      width: bWidth,
      backgroundColor: customBgColor,
      borderColor: customBdColor,
    }"
    :disabled="disabled"
    type="primary"
    @click="clickFn"
    @mouseenter.native="enter(true)"
    @mouseleave.native="enter(false)"
  >
    <slot></slot>
    {{ label }}
  </el-button>
</template>
<script>
import "./button.scss"

export default {
  name: 'LhButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '120px',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '', // #5a62b3,#40489c  默认颜色，hover颜色
    },
  },
  data() {
    return {
      customBgColor: '',
      customBdColor: '',
    }
  },
  computed: {
    bWidth() {
      let wid = ''
      if (this.size.indexOf('px') == -1) {
        wid = this.size + 'px'
      } else {
        wid = this.size
      }
      return wid
    },
    typeClass() {
      let classname = ''
      switch (this.type) {
        case 'danger':
          classname = 'btn-danger'
          break
        case 'plain':
          classname = 'btn-plain'
          break
        case 'pink':
          classname = 'btn-pink'
          break
      }
      return classname
    },
  },
  mounted() {
    const colors = this.color.split(',')
    if (this.color) {
      this.customBgColor = this.type == 'plain' ? '#fff' : colors[0]
      this.customBdColor = colors[0]
    }
  },
  methods: {
    clickFn(ev) {
      this.$emit('click',ev);
    },
    /**
     * 自定义按钮颜色
     */
    enter(isHover) {
      const colors = this.color.split(',')
      if (this.color) {
        if (isHover) {
          this.customBgColor = this.type == 'plain' ? '#fff' : colors[1]
          this.customBdColor = colors[1]
        } else {
          this.customBgColor = this.type == 'plain' ? '#fff' : colors[0]
          this.customBdColor = colors[0]
        }
      } else {
        this.customBgColor = ''
        this.customBdColor = ''
      }
    },
  },
}
</script>

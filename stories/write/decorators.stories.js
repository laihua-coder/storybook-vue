import LhButton from '@/components/button/Button.vue'
import { action } from '@storybook/addon-actions'
// import React from "react";
export default {
  title: 'write/decorators',
  component: LhButton,
  // decorators: [(Story) => <div style={{ margin: '3em' }}><Story/></div>],
  argTypes: {
    label: { control: 'text' },
    size: { control: 'text' },
    type: { control: { type: 'select', options: ['danger', 'plain', 'pink'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LhButton },
  template: '<lh-button @click="action" v-bind="$props" />',
  methods: {
    action: action('click')
  }
})

export const decorators = Template.bind({})

decorators.args = {
  size: '120px',
  label: 'Button'
}

import LhButton from '@/components/button/Button.vue';
import { action } from '@storybook/addon-actions'

export default {
  title: 'addons/background',
  component: LhButton,
  parameters: {
    backgrounds: {
      values: [
         { name: 'red', value: '#f00', },
         { name: 'green', value: '#0f0', },
         { name: 'blue', value: '#00f', },
      ]
    }
  },
  argTypes: {
    label:{control:'text'},
    size:{control:'text'},
    type:{ control: { type: 'select', options: ['danger', 'plain', 'pink'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LhButton },
  template: '<lh-button @click="action" v-bind="$props" />',
  methods:{
     action: action('click')
  }
});

export const background = Template.bind({});

background.args = {
  size: "120px",
  label: 'Button',
};

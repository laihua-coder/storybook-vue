import LhButton from '@/components/button/Button.vue';
import { action } from '@storybook/addon-actions'

export default {
  title: 'addons/actions',
  component: LhButton,
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

export const actions = Template.bind({});

actions.args = {
  size: "120px",
  label: 'Button',
};

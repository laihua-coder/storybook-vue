import LhButton from '@/components/button/Button.vue';
import { linkTo } from '@storybook/addon-links'

export default {
  title: 'addons/links',
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
    action:linkTo('addons/actions'),
  }
});

export const links = Template.bind({});

links.args = {
  size: "120px",
  label: 'linkTo跳转',
};


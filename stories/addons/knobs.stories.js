import LhButton from '@/components/button/Button.vue';

export default {
  title: 'addons/knobs',
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
  template: '<lh-button v-bind="$props" />'
});

export const knobs = Template.bind({});

knobs.args = {
  size: "120px",
  label: 'knobs',
};

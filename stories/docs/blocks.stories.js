import LhButton from "@/components/button/Button.vue";
import { action } from "@storybook/addon-actions";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  Props,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs/blocks";

export default {
  title: "write/blocks",
  component: LhButton,
  // parameters: {
  //   docs: {
  //     page: () => (
  //       <>
  //         <Title />
  //         <Subtitle />
  //         <Description />
  //         <Primary />
  //         <ArgsTable story={PRIMARY_STORY} />
  //         <Stories />
  //       </>
  //     ),
  //   },
  // },
  argTypes: {
    label: { control: "text" },
    size: { control: "text" },
    type: { control: { type: "select", options: ["danger", "plain", "pink"] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LhButton },
  template: '<lh-button @click="action" v-bind="$props" />',
  methods: {
    action: action("click"),
  },
});

export const blocks = Template.bind({});

blocks.args = {
  size: "120px",
  label: "Button",
};

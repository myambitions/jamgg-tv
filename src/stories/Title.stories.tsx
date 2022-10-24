import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "./Title";

export default {
  title: "Canvas Title",
  component: Title,
  args: {
    backgroundColor: "#000",
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Here could be any title you want",
  channel: 5,
};

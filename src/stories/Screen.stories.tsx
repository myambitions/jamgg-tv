import { ComponentStory, ComponentMeta } from "@storybook/react";
import img from "assets/1.jpg";
import { Screen } from "./Screen";

export default {
  title: "Canvas Screen",
  component: Screen,
} as ComponentMeta<typeof Screen>;

const Template: ComponentStory<typeof Screen> = (args) => <Screen {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "No active channel there",
  channel: 111,
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Are you sure a story with that id exists?",
  channel: 5,
  img,
};

export const Drawable = Template.bind({});
Drawable.args = {
  title: "",
  channel: 7,
};

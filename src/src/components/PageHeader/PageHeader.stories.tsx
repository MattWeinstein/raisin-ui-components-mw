import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { PageHeaderProps } from "./PageHeader";
import { PageHeader } from "./PageHeader";

export default {
  title: "components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Default: StoryFn<PageHeaderProps> = Template.bind({});

Default.args = {
  text: "Hello, World!",
};

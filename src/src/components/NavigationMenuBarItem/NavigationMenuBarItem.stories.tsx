import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { NavigationMenuBarItem,NavigationMenuBarItemProps } from "./NavigationMenuBarItem";

export default {
  title: "components/NavigationMenuBarItem",
  component: NavigationMenuBarItem,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<NavigationMenuBarItemProps> = (args) => <NavigationMenuBarItem {...args} />;

export const Default = {
  ...Template
}